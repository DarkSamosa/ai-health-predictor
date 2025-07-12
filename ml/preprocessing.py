import pandas as pd
import os
current_dir = os.path.dirname(os.path.abspath(__file__))
gwas_path = os.path.join(current_dir, 'data', 'full_gwas_summary_stats.csv')
df_gwas = pd.read_excel(gwas_path)

def prs_data(df):
    diseases = df_gwas["Disease"].unique()
    prs_scores = pd.DataFrame()

    for disease in diseases:
       betas = df_gwas[df_gwas["Disease"] == disease].set_index("SNP")["Beta"]
       common_snps = df.columns.intersection(betas.index)
       prs = df[common_snps].dot(betas.loc[common_snps])
       prs_scores[f"PRS_{disease}"] = prs

    prs_scores["Age"] = df["Age"]
    prs_scores["BMI"] = df["BMI"]
    return prs_scores


