
export const handleDownload = (path: string, slug: string) => {
    // Cria um link temporário para iniciar o download
    const downloadLink = document.createElement('a');
    downloadLink.href = path;
    downloadLink.download = `${slug}.pdf`;

    // Adiciona o link ao DOM, clica nele e remove-o depois do download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};

