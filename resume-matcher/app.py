import base64
import io
from dotenv import load_dotenv
import streamlit as st
import os
from PIL import Image
import pdf2image
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))


# Function to interact with Gemini API
def get_gemini_response(input_text, pdf_content, prompt):
    model = genai.GenerativeModel("gemini-1.5-flash")
    with st.spinner("Analyzing with Gemini... 🔍"):
        response = model.generate_content([input_text, pdf_content[0], prompt])
    return response.text


# Convert uploaded PDF to image and encode
def input_pdf_setup(uploaded_file):
    if uploaded_file is not None:
        poppler_path = r"C:\Users\adity\Downloads\poppler-23.11.0\Library\bin"
        images = pdf2image.convert_from_bytes(
            uploaded_file.read(), poppler_path=poppler_path
        )
        first_page = images[0]

        img_byte_arr = io.BytesIO()
        first_page.save(img_byte_arr, format="JPEG")
        img_byte_arr = img_byte_arr.getvalue()

        pdf_parts = [
            {"mime_type": "image/jpeg", "data": base64.b64encode(img_byte_arr).decode()}
        ]
        return pdf_parts
    else:
        raise FileNotFoundError("No file uploaded")


# Page setup
st.set_page_config(page_title="ATS Resume Analyzer", layout="wide")
st.markdown(
    """
    <style>
    /* Hide Streamlit default menu and footer */
    #MainMenu, footer, header {visibility: hidden;}

    /* Custom top navbar */
    .custom-navbar {
        background-color: #1f1f1f;
        padding: 10px 30px;
        color: white;
        font-size: 22px;
        font-weight: bold;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Body padding to avoid overlap */
    .block-container {
        padding-top: 5px !important;
    }
    .main {
        background-color: #f5f5f5;
    }
    .block-container {
        padding-top: 2rem;
    }
    .stTextArea textarea {
        font-size: 16px;
        font-family: monospace;
    }
    
    /* Sidebar background and text */
    [data-testid="stSidebar"] {
        background-color: #2f2f2f; /* light black */
        color: white;
    }

    [data-testid="stSidebar"] * {
        color: white !important;
    }
    
    .stButton>button {
        width: 100%;
        font-size: 18px;
        background-color: #4CAF50;
        color: white;
        padding: 10px;
    }
    .stButton>button:hover {
        background-color: #45a049;
    }
       /* Set all text to black */
    html, body, h1, h2, h3, h4, h5, h6, p, span, div, label, strong, em, b, i {
        color: black !important;
    }
    span, p {
        color: black !important;
    }
    
    .custom-result-box {
        border: 2px solid #4CAF50;
        padding: 15px;
        border-radius: 10px;
        background-color: #f9f9f9;
        color: black;
        font-size: 16px;
    }
    </style>
""",
    unsafe_allow_html=True,
)

# Title and Sidebar
st.title("📄 ATS Resume Analyzer")
st.sidebar.header("🔧 How to Use")
st.sidebar.markdown(
    """
1. Paste your job description.
2. Upload your resume (PDF).
3. Click a button to:
   - Get resume feedback
   - See how well it matches (% match)
"""
)

# Inputs
st.markdown("### 💼 Job Description")
input_text = st.text_area("Paste the job description here:", key="input", height=200)

uploaded_file = st.file_uploader("📎 Upload your resume (PDF only)", type=["pdf"])
if uploaded_file:
    st.success("✅ Resume uploaded successfully!")

# Prompts
input_prompt1 = """
You are an experienced HR with Tech Experience in the field of Data Science, Full Stack Web Development, Big Data Engineering, DEVops, Data Analyst. Your task is to review the provided resume against the job description for these profiles.
Please share your professional evaluation on whether the candidate's profile aligns with these roles. Highlight the strengths and weaknesses of the applicant in relation to the specific job requirements.
"""

input_prompt3 = """
You are a skilled ATS (Application Tracking System) scanner with a deep understanding of Data Science, Full Stack Web Development, Big Data Engineering, DEVops, Data Analyst and deep ATS Functionality.
Your task is to evaluate the resume against the provided job description. Give me the percentage match if the resume matches with the job description.
First the output should come as percentage and then keywords missing in resume according to the job description.
"""

# Buttons in Columns
col1, col2 = st.columns(2)

with col1:
    submit1 = st.button("📋 Tell Me About the Resume")
with col2:
    submit3 = st.button("📊 Percentage Match + Keywords")

# Execution Logic
if submit1:
    if uploaded_file is not None and input_text:
        pdf_content = input_pdf_setup(uploaded_file)
        response = get_gemini_response(input_text, pdf_content, input_prompt1)
        st.markdown("### 📝 Resume Evaluation")
        st.write(response)
    else:
        st.error("⚠️ Please upload your resume and enter job description.")

elif submit3:
    if uploaded_file is not None and input_text:
        pdf_content = input_pdf_setup(uploaded_file)
        response = get_gemini_response(input_text, pdf_content, input_prompt3)
        st.markdown("### 📊 Match Percentage & Missing Keywords")
        st.success(response)
    else:
        st.error("⚠️ Please upload your resume and enter job description.")
