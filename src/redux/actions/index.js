export const update_userInfo=(val)=>{
    return {
        type:'update_userInfo',
        value:val
    }
}
export const update_persionalAdvantage=(val)=>{
    return {
        type:'update_persionalAdvantage',
        value:val
    }
}

export const update_educationAction=(name)=>{
    return {
        type:'update_education',
        value:name
    }
}
export const del_educationAction=(name)=>{
    return {
        type:'del_education',
        value:name
    }
}
export const add_educationAction=(val)=>{
    return {
        type:'add_education',
        value:val
    }
}