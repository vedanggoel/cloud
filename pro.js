function displayImage() {
    const fileInput = document.getElementById("fileInput");
    const uploadedImage = document.getElementById("uploadedImage");
    const imageBox = document.querySelector(".image-box");

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
        imageBox.style.borderColor = "#333";
    } else {
        uploadedImage.src = "";
        imageBox.style.borderColor = "#ccc";
    }
}
