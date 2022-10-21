const myPosts = [
    {
        id : 0,
        title: "Posting my first post",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
                + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                + "when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
    },
    {
        id : 1,
        title: "Posting my second post",
        content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " 
                + "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages," 
                + "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]
const postComments = [
    {
        id: 0,
        content: [
            {
                id: 0,
                context: "Very usefull" 
            },
            {
                id: 1,
                context: "Interesting"
            }
        ]
    },
    {
        id: 1,
        content: [
            {
                id: 0,
                context: "This post sucks" 
            },
            {
                id: 1,
                context: "Post more please"
            }
        ]
    }
]

module.exports = { myPosts, postComments }