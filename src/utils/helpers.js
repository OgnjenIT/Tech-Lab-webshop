
export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat("ba-km", {
        style:"currency",
        currency: "BAM"
    }).format(number/100)
    return newNumber
}

export const getUniqueValues = (data, type) => {
    let unique = data.map(item=>{
        return item[type]
    })
    if(type==="colors"){
        unique=unique.flat()
    }
    return ["all", ...new Set(unique)]
}   
