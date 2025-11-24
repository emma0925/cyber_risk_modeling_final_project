import pandas as pd
import matplotlib.pyplot as plt

# ---------- 1. Load & clean ----------
df = pd.read_csv("./healthcare_only_attacks.csv")

# Ensure numeric types
df["Year"] = pd.to_numeric(df["Year"], errors="coerce")
df["Financial Loss (in Million $)"] = pd.to_numeric(
    df["Financial Loss (in Million $)"], errors="coerce"
)
df["Number of Affected Users"] = pd.to_numeric(
    df["Number of Affected Users"], errors="coerce"
)
df["Incident Resolution Time (in Hours)"] = pd.to_numeric(
    df["Incident Resolution Time (in Hours)"], errors="coerce"
)

# Drop rows with any critical missing values
df = df.dropna(
    subset=[
        "Year",
        "Financial Loss (in Million $)",
        "Number of Affected Users",
        "Incident Resolution Time (in Hours)",
    ]
)

# ---------- 2. Total financial loss by year ----------
loss_by_year = (
    df.groupby("Year")["Financial Loss (in Million $)"]
    .sum()
    .reset_index()
    .sort_values("Year")
)

plt.figure()
plt.plot(loss_by_year["Year"], loss_by_year["Financial Loss (in Million $)"], marker="o")
plt.xlabel("Year")
plt.ylabel("Total Financial Loss (Million USD)")
plt.title("Total Healthcare Ransomware Loss by Year")
plt.grid(True, linestyle="--", alpha=0.4)
plt.tight_layout()
plt.savefig("loss_by_year.png", dpi=200)

# ---------- 3. Average financial loss by country (top 10) ----------
avg_loss_by_country = (
    df.groupby("Country")["Financial Loss (in Million $)"]
    .mean()
    .sort_values(ascending=False)
    .head(10)
)

plt.figure()
avg_loss_by_country.plot(kind="bar")
plt.xlabel("Country")
plt.ylabel("Average Financial Loss (Million USD)")
plt.title("Top 10 Countries by Avg Healthcare Ransomware Loss")
plt.xticks(rotation=45, ha="right")
plt.tight_layout()
plt.savefig("avg_loss_by_country_top10.png", dpi=200)

# ---------- 4. Loss vs number of affected users ----------
plt.figure()
plt.scatter(
    df["Number of Affected Users"],
    df["Financial Loss (in Million $)"],
    alpha=0.6,
)
plt.xlabel("Number of Affected Users")
plt.ylabel("Financial Loss (Million USD)")
plt.title("Financial Loss vs Number of Affected Users")
plt.grid(True, linestyle="--", alpha=0.4)
plt.tight_layout()
plt.savefig("loss_vs_affected_users.png", dpi=200)

# ---------- 5. Loss vs resolution time ----------
plt.figure()
plt.scatter(
    df["Incident Resolution Time (in Hours)"],
    df["Financial Loss (in Million $)"],
    alpha=0.6,
)
plt.xlabel("Incident Resolution Time (Hours)")
plt.ylabel("Financial Loss (Million USD)")
plt.title("Financial Loss vs Incident Resolution Time")
plt.grid(True, linestyle="--", alpha=0.4)
plt.tight_layout()
plt.savefig("loss_vs_resolution_time.png", dpi=200)

# ---------- 6. Distribution of resolution time ----------
plt.figure()
plt.hist(df["Incident Resolution Time (in Hours)"], bins=10)
plt.xlabel("Incident Resolution Time (Hours)")
plt.ylabel("Number of Incidents")
plt.title("Distribution of Ransomware Resolution Times (Healthcare)")
plt.tight_layout()
plt.savefig("resolution_time_distribution.png", dpi=200)

# ---------- 7. Number of incidents per year ----------

year_counts = df["Year"].value_counts().sort_index()

plt.figure(figsize=(12,6))
plt.bar(year_counts.index.astype(str), year_counts.values)
plt.title("Number of Healthcare Ransomware Incidents per Year")
plt.xlabel("Year")
plt.ylabel("Number of Incidents")
plt.grid(axis="y", linestyle="--", alpha=0.5)
plt.xticks(rotation=45)
plt.show()

print("Plots saved:")
print(" - loss_by_year.png")
print(" - avg_loss_by_country_top10.png")
print(" - loss_vs_affected_users.png")
print(" - loss_vs_resolution_time.png")
print(" - resolution_time_distribution.png")
print(" - number_of_incidents_per_year.png")
