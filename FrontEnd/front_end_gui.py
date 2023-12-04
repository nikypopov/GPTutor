import tkinter as tk
from tkinter import Toplevel, font as tkFont

def open_subject_window(subject):
    # Function to create a new window for a subject
    subject_window = Toplevel(root)
    subject_window.title(subject)
    subject_window.geometry("400x300")
    subject_window.configure(bg="#f0f0f0")

    # Text box for input
    input_text = tk.Text(subject_window, height=5, width=50, font=modern_font, bg="#ffffff")
    input_text.pack(pady=10)

    # Frame for buttons
    buttons_frame = tk.Frame(subject_window, bg="#f0f0f0")
    buttons_frame.pack(fill="x", pady=10)

    # Buttons for different folders/topics
    folders = ["Lecture Help", "Homework Help", "Code Assistance"]
    for folder in folders:
        btn = tk.Button(buttons_frame, text=folder, font=modern_font, bg="#d9d9d9", pady=5)
        btn.pack(side="left", fill="x", expand=True, padx=5)


# Main window setup
root = tk.Tk()
root.title("GPTutor")
root.geometry("600x400")
root.configure(bg="#f0f0f0")

# Font setup
modern_font = tkFont.Font(family="Helvetica", size=10)

# Create a menu bar
menu_bar = tk.Menu(root, bg="#e6e6e6", font=modern_font)
root.config(menu=menu_bar)

# Create a File menu
file_menu = tk.Menu(menu_bar, tearoff=0, bg="#f2f2f2", font=modern_font)
menu_bar.add_cascade(label="File", menu=file_menu)
file_menu.add_command(label="Exit", command=root.quit)

# Create a Help menu
help_menu = tk.Menu(menu_bar, tearoff=0, bg="#f2f2f2", font=modern_font)
menu_bar.add_cascade(label="Help", menu=help_menu)
help_menu.add_command(label="About")

# Frames for subjects and chat
subjects_frame = tk.Frame(root, borderwidth=2, relief="sunken", bg="#e6e6e6")
chat_frame = tk.Frame(root, borderwidth=2, relief="sunken", bg="#e6e6e6")
subjects_frame.pack(side="left", fill="y", padx=10, pady=10)
chat_frame.pack(side="right", expand=True, fill="both", padx=10, pady=10)

# Subject buttons
subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science"]
for subject in subjects:
    btn = tk.Button(subjects_frame, text=subject, font=modern_font, bg="#d9d9d9", pady=5, command=lambda s=subject: open_subject_window(s))
    btn.pack(fill="x", padx=5, pady=5)

# Chat text area
chat_text = tk.Text(chat_frame, state='disabled', font=modern_font, bg="#ffffff")
chat_text.pack(expand=True, fill="both", padx=5, pady=5)

root.mainloop()
