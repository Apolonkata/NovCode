from flask import Flask, send_from_directory

# Create Flask app
app = Flask(__name__, static_folder="public")

# Route to serve the index.html file as the homepage
@app.route("/")
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

# Route to serve other static files (CSS, JS, images)
@app.route("/<path:path>")
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(debug=True)
