let dataUser = [
    {
      id: 1,
      name: 'Cuong',
      age: 32,
      address: 'Ha Noi',
    },
    {
      id: 2,
      name: 'Anh',
      age: 42,
      address: 'Da Nang',
    },
]

const getAllUsers = () => {
    return {
        message: 'Get successfully !',
        code: 0,
        data: dataUser
    }
}

const deleteUser = (id: number) => {
    const index = dataUser.findIndex((data) => data.id === id );
    if (index > -1) { 
        dataUser.splice(index, 1); 
        return {
            message: 'Get successfully !',
            code: 0,
            data: dataUser
        }
    }
    else {
        return {
            message: 'User not found !',
            code: 1,
            data: []
        }
    }
}

const editUser = (id: number, name: string, age: number, address: string) => {
    
}

export { getAllUsers, deleteUser, editUser }