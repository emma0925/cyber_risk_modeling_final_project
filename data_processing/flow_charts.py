import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch

# Define the steps in the attack path
steps = [
    "Clinician Workstation\n(Phishing)",
    "RDP Jump Host\n(Valid Credentials,\nNo MFA)",
    "Departmental File Shares\n(User Write Access)",
    "File Encryption",
    "Operational Outage"
]

# Create figure
fig, ax = plt.subplots(figsize=(12, 3))
ax.set_xlim(0, len(steps))
ax.set_ylim(-1, 1)
ax.axis("off")

# Layout parameters
y = 0
box_width = 0.9
box_height = 0.6

for i, step in enumerate(steps):
    x = i + 0.1  # small offset for spacing
    # Draw box
    box = FancyBboxPatch(
        (x, y - box_height / 2),
        box_width,
        box_height,
        boxstyle="round,pad=0.1",
        linewidth=1.5
    )
    ax.add_patch(box)
    # Add text
    ax.text(
        x + box_width / 2,
        y,
        step,
        ha="center",
        va="center",
        wrap=True
    )
    # Draw arrow to next box
    if i < len(steps) - 1:
        arrow = FancyArrowPatch(
            (x + box_width, y),
            (x + 1.0, y),
            arrowstyle="->",
            mutation_scale=15,
            linewidth=1.5
        )
        ax.add_patch(arrow)

plt.tight_layout()
output_path = "./attack_path_flow_chart.png"
plt.savefig(output_path, dpi=200, bbox_inches="tight")
output_path
