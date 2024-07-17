import html2pdf from "html2pdf.js";

export default function handleDownload(data) {
  const contentToDownload = `
        <div>
            <p><strong>Description:</strong> ${data.text}</p>
            <p><strong>Due Date:</strong> ${data.date}</p>
            <p><strong>Completed status:</strong> ${
              data.completedStatus ? "Completed" : "Not Yet"
            }</p>
            <p>${"‎ "}</p>
        </div>
        
        
    `;

  const options = {
    margin: 10,
    filename: `${data.text}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf()
    .from(contentToDownload)
    .set(options)
    .toPdf()
    .get("pdf")
    .then(function (pdf) {
      const blob = pdf.output("blob");
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${data.text}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
}
