document.addEventListener("DOMContentLoaded", () => {
  const openFileButton = document.getElementById("openFileButton");
  const selectedFilesList = document.getElementById("selectedFiles");

  openFileButton.addEventListener("click", async () => {
    try {
      const fileHandles = await window.showOpenFilePicker({ multiple: true });

      selectedFilesList.innerHTML = "";

      for (const fileHandle of fileHandles) {
        const file = await fileHandle.getFile();
        const listItem = document.createElement("li");
        const link = document.createElement("a");

        if (file.type.startsWith("image/")) {
          const imagePreview = document.createElement("img");
          imagePreview.classList.add("file-preview");
          imagePreview.src = URL.createObjectURL(file);
          listItem.appendChild(imagePreview);
        } else {
          link.textContent = file.name;
          link.href = URL.createObjectURL(file);
          link.target = "_blank";
          listItem.appendChild(link);
        }

        selectedFilesList.appendChild(listItem);
      }
    } catch (error) {
      console.error("Error accessing files:", error);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const saveFileButton = document.getElementById("saveFileButton");
  const fileContentTextarea = document.getElementById("fileContent");

  // Set default content in the textarea
  fileContentTextarea.value =
    "This is the content that will be saved in the text file.";

  saveFileButton.addEventListener("click", async () => {
    try {
      const fileHandle = await window.showSaveFilePicker();
      const writable = await fileHandle.createWritable();

      // Get the content from the textarea
      const content = fileContentTextarea.value;

      // Write content to the file
      await writable.write(content);
      await writable.close();

      alert("File saved successfully!");
    } catch (error) {
      console.error("Error saving the file:", error);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openDirectoryButton = document.getElementById("openDirectoryButton");
  const contentsList = document.getElementById("contentsList");

  openDirectoryButton.addEventListener("click", async () => {
    try {
      const dirHandle = await window.showDirectoryPicker();
      contentsList.innerHTML = ""; // Clear the previous list

      for await (const entry of dirHandle.values()) {
        const listItem = document.createElement("li");
        listItem.textContent = entry.name;
        contentsList.appendChild(listItem);
      }
    } catch (error) {
      console.error("Error accessing directory:", error);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createFileButton = document.getElementById("createFileButton");
  const fileOperationStatus = document.getElementById("fileOperationStatus");

  createFileButton.addEventListener("click", async () => {
    try {
      const dirHandle = await window.showDirectoryPicker();

      const fileName = "example.txt";
      const fileHandle = await dirHandle.getFileHandle(fileName, {
        create: true,
      });

      const writable = await fileHandle.createWritable();

      const content =
        "This text was written to the file using File System Access API.";

      await writable.write(content);

      await writable.close();

      fileOperationStatus.textContent = `File "${fileName}" created and content written successfully.`;
    } catch (error) {
      console.error("Error creating or writing to the file:", error);
      fileOperationStatus.textContent = `Error: ${error.message}`;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createFileButton = document.getElementById("createFileButton2");
  const fileOperationStatus = document.getElementById("fileOperationStatus2");

  createFileButton.addEventListener("click", async () => {
    try {
      const dirHandle = await window.showDirectoryPicker();

      // Get the name for the file to be resolved and created
      const fileName = prompt("Enter the name for the file:");

      if (!fileName) {
        return;
      }

      // Resolve the file within the selected directory
      const fileHandle = await dirHandle.getFileHandle(fileName, {
        create: true,
      });

      // Create a writable stream for the resolved file
      const writable = await fileHandle.createWritable();

      // Define the content you want to write to the file
      const content =
        "This text was written to the resolved file using File System Access API.";

      // Write the content to the file
      await writable.write(content);

      // Close the writable stream to save the changes
      await writable.close();

      fileOperationStatus.textContent = `File "${fileName}" resolved, created, and content written successfully.`;
    } catch (error) {
      console.error("Error creating or writing to the resolved file:", error);
      fileOperationStatus.textContent = `Error: ${error.message}`;
    }
  });
});
