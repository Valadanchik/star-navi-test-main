export const getMatrixData = async () => {
    const response = await fetch('http://demo1030918.mockable.io/');
     return response.json();
}
