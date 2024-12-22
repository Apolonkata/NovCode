from flask import Flask, render_template, redirect, url_for, request, session
from flask import send_from_directory

app = Flask(__name__, static_folder="public")
app.secret_key = "your_secret_key"  # For session management

# Route to serve the index.html (registration page)
@app.route("/")
def serve_index():
    if "user" in session:  # If user is logged in, redirect to home
        return redirect(url_for("serve_home"))
    return send_from_directory(app.static_folder, "index.html")

# Route to serve the home page after successful login/registration
@app.route("/home")
def serve_home():
    if "user" not in session:  # If no user logged in, redirect to login
        return redirect(url_for("serve_index"))
    return render_template("home.html")

# Handle registration (you'll need to replace this with your actual registration logic)
@app.route("/register", methods=["POST"])
def register():
    # Here, you would handle the registration logic, e.g., saving user info to a database
    # For now, we just log the user in immediately after registration
    session["user"] = request.form["username"]  # Save username in session (for demo)
    return redirect(url_for("serve_home"))

# Handle login (you'll need to replace this with your actual login logic)
@app.route("/login", methods=["POST"])
def login():
    # Here, you would handle the login logic, e.g., checking credentials
    session["user"] = request.form["username"]  # Save username in session (for demo)
    return redirect(url_for("serve_home"))

# Handle logout
@app.route("/logout")
def logout():
    session.pop("user", None)  # Remove user from session
    return redirect(url_for("serve_index"))  # Redirect to the login page

# Serve other static files (CSS, JS, images)
@app.route("/<path:path>")
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(debug=True)
