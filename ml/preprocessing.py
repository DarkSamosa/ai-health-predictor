import pandas as pd

df_gwas = pd.read_excel(r"C:\Users\kavit\Desktop\ml mvp\data\full_gwas_summary_stats.csv")

def prs_data(df):
    diseases = df_gwas["Disease"].unique()
    prs_scores = pd.DataFrame()
    prs_scores["Person_ID"] = df["Person_ID"]

    for disease in diseases:
       betas = df_gwas[df_gwas["Disease"] == disease].set_index("SNP")["Beta"]
       common_snps = df.columns.intersection(betas.index)
       prs = df[common_snps].dot(betas.loc[common_snps])
       prs_scores[f"PRS_{disease}"] = prs

    prs_scores["Age"] = df["Age"]
    prs_scores["BMI"] = df["BMI"]
    return prs_scores


