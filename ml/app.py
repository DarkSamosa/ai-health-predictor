from flask import Flask, jsonify, request
import pandas as pd
import numpy as np
from preprocessing import prs_data
import joblib

app = Flask(__name__)

model = joblib.load('model.pkl')

@app.route ('/predict', methods = ['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error':'No file uploaded'}), 400
    
    file = request.files['file']
    try:
        df = pd.read_csv(file)
        df_clean = prs_data(df)
        probs = model.predict_proba(df_clean)

        disease_name = ['Alzheimer', 'Dementia', 'Hypertension', 'Diabetes', 'Bipolar Disorder', 'Cancer']
        prob_df = pd.DataFrame()

        for i, disease in enumerate(disease_name):
            prob_df[f"{disease}_status"] = [f"{round(float(p[1])*100, 2)}% risk" for p in probs[i]]

        prob_df['Person_ID'] = df['Person_ID'].values

        cols = ['Person_ID'] + disease_name
        return jsonify(prob_df.to_dict(orient = 'records'))
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
    if __name__ == '__main__':
        app.run(port = 8000, debug = True)



    

        


