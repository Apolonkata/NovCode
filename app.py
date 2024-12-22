from flask import Flask, render_template, redirect, url_for, request, send_from_directory

app = Flask(__name__, static_folder="public")

# Route to serve the index.html (registration page)
@app.route("/")
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

# Route to serve the home page after successful login/registration
@app.route("/home")
def serve_home():
    return render_template("home.html")

# Handle registration (you'll need to replace this with your actual registration logic)
@app.route("/register", methods=["POST"])
def register():
    # Here, you would handle the registration logic, e.g., saving user info to a database
    # For now, we just redirect to the homepage after registration
    return redirect(url_for("serve_home"))

# Handle login (you'll need to replace this with your actual login logic)
@app.route("/login", methods=["POST"])
def login():
    # Here, you would handle the login logic, e.g., checking credentials
    # For now, we just redirect to the homepage after login
    return redirect(url_for("serve_home"))

# Handle logout (clearing session or cookies, if implemented)
@app.route("/logout")
def logout():
    # Here, you would handle the logout logic, e.g., clearing the session
    # For now, we just redirect to the login page (index.html)
    return redirect(url_for("serve_index"))  # Redirect to the login page

# Serve other static files (CSS, JS, images)
@app.route("/<path:path>")
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(debug=True)
