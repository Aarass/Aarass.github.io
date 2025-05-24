import subprocess
import os

# Željena širina
width = 300

# Folder sa slikama ('' znači trenutni folder)
folder = './'

# Podržane ekstenzije
extensions = ('.jpg', '.jpeg', '.png', '.bmp', '.webp')

for filename in os.listdir(folder):
    if filename.lower().endswith(extensions):
        input_path = os.path.join(folder, filename)
        output_path = os.path.join(folder, f"scaled_{filename}")

        print(f"Skaliram {filename}...")

        subprocess.run([
            "ffmpeg",
            "-y",  # prepiši fajl ako već postoji
            "-i", input_path,
            "-vf", f"scale={width}:-1",
            output_path
        ], check=True)

print("Gotovo!")

