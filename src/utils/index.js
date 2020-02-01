


export const getCategories = (data) =>{
    if(data){
        const categories = data.map(data => data.shelf);
        return categories.filter((item,index) => categories.indexOf(item) === index);
    }else{
        return 'Error expected shelf values'
    }
}

export const categoryTitle = (data) => {
    const categories = getCategories(data);
    return categories.map(data => {
        if(data === 'currentlyReading'){
            return {
                data,
                title : 'Sedang Dibaca'
            }
        }else if(data === 'read'){
            return {
                data, 
                title : 'Selesai Dibaca'
            }
        }else if(data === 'wantToRead'){
            return {
                data, 
                title : 'Akan Dibaca'
            }
        }
        return data
    })
}