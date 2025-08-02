from fastapi import FastAPI, UploadFile, File
import os
from utils.file_parser import extract_resume_text
from models.analyzer import analyze_resume

app = FastAPI()

@app.post("/analyze-resume/")
async def analyze_resume_endpoint(file: UploadFile = File(...)):
    try:
        temp_file_path = f"temp_{file.filename}"
        with open(temp_file_path, "wb") as f:
            f.write(await file.read())

        resume_text = extract_resume_text(temp_file_path)
        result = analyze_resume(resume_text)

        os.remove(temp_file_path)
        return {"result": result}

    except Exception as e:
        print("ERROR:", e)
        return {"error": str(e)}
