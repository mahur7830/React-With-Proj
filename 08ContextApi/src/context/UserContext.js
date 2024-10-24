import React from 'react'

//====steps to create context ==== A context is a global variable, all the components inside the context can take access of all states

const UserContext = React.createContext()

export default UserContext


//===Every context has a provider

// For every context we have to make a provider we will make a provider for this inside context folder