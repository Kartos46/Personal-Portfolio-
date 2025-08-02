import spacy

nlp = spacy.load("en_core_web_sm")

def analyze_resume(text: str) -> dict:
    doc = nlp(text)
    skills = [ent.text for ent in doc.ents if ent.label_ in ["ORG", "SKILL", "PRODUCT"]]
    
    return {
        "word_count": len(text.split()),
        "entities": skills,
        "summary": text[:500] + "..."  # just a sample
    }
