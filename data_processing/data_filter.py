import pandas as pd

# Load your dataset
df = pd.read_csv("Global_Cybersecurity_Threats_2015-2024.csv")
print(df["Attack Type"])

# Filter only rows where BOTH Attack Type and Target Industry = Healthcare
filtered_df = df[
    (df["Attack Type"] == "Ransomware") &
    (df["Target Industry"] == "Healthcare")
]

# Print results
print(filtered_df)

# Save to new CSV
filtered_df.to_csv("healthcare_only_attacks.csv", index=False)

print("Filtered dataset saved as healthcare_only_attacks.csv")
