const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

// Example usage
const currentDate = new Date();
const id = formatDate(currentDate) + "-01" //müsste geguckt werden der wievielte PC das an dem Datum war, zählen bei 1 anfangen -.-
console.log(id)

// von der Idee schonmal ganz in Ordnung, muss aber natürlich testen ob es die 01 ID schon gibt. Eigentlich unnötig weil es ID's sowieso gibt, müsste man nachfragen ob es die ID für irgendetwas anderes benötigt
