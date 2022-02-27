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


export const update_projectAction=(name)=>{
    return {
        type:'update_project',
        value:name
    }
}
export const del_projectAction=(name)=>{
    return {
        type:'del_project',
        value:name
    }
}
export const add_projectAction=(val)=>{
    return {
        type:'add_project',
        value:val
    }
}

export const update_workAction=(name)=>{
    return {
        type:'update_work',
        value:name
    }
}
export const del_workAction=(name)=>{
    return {
        type:'del_work',
        value:name
    }
}
export const add_workAction=(val)=>{
    return {
        type:'add_work',
        value:val
    }
}