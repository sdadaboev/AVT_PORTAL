export const getMainPage = (req, res, next) => {
    try {
        res.redirect('/home/main')
    } catch (error) {
        console.log(error)
    }
}
