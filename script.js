document.getElementById('CargarContenido').addEventListener('click', function() {
        const fileInput = document.getElementById('SubirArchivo');
        const file = fileInput.files[0];

        const imageInput = document.getElementById('SubirImagen');
        const imageFile = imageInput.files[0];

        const pdfInput = document.getElementById('SubirPdf');
        const pdfFile = pdfInput.files[0];

        const audioInput = document.getElementById('SubirAudio');
        const audioFile = audioInput.files[0];

        const videoInput = document.getElementById('SubirVideo');
        const videoFile = videoInput.files[0];
        
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const contents = e.target.result;
                console.log(contents); 
                document.getElementById('MostrarContenido').textContent = contents;
            };
            reader.readAsText(file);
        } else {
            alert('Por favor, selecciona un archivo.');
        }

        if (imageFile) {
            const imageReader = new FileReader();
            imageReader.onload = function(e) {
                const imageUrl = e.target.result;
                console.log(imageUrl); 
                document.getElementById('MostrarImagen').src = imageUrl;
            };
            imageReader.readAsDataURL(imageFile);
        } else {
            alert('Por favor, selecciona una imagen.');
        }

        if (pdfFile) {
            const pdfUrl = URL.createObjectURL(pdfFile);
            console.log(pdfUrl); 
            document.getElementById('MostrarPdf').src = pdfUrl;
        } else {
            alert('Por favor, selecciona un archivo PDF.');
        }

        if (audioFile) {
            const audioUrl = URL.createObjectURL(audioFile);
            console.log(audioUrl); 
            const audioElement = document.createElement('audio');
            audioElement.controls = true;
            audioElement.src = audioUrl;
            document.body.appendChild(audioElement);
        } else {
            alert('Por favor, selecciona un archivo de audio.');
        }

        if (videoFile) {
            const videoUrl = URL.createObjectURL(videoFile);
            console.log(videoUrl); 
            const videoElement = document.createElement('video');
            videoElement.controls = true;
            videoElement.src = videoUrl;
            document.body.appendChild(videoElement);
        } else {
            alert('Por favor, selecciona un archivo de video.');
        }


    });