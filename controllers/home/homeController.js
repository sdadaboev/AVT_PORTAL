export const homePage = (req, res, next) => {
    try {
        res.render('my page/myPage.ejs', {
            title: 'mening sahifam',
        })
    } catch (error) {
        console.log(error)
    }
}
export const xazinaPage = (req, res, next) => {
    try {
        res.render('my page/talimOlish.ejs', {
            title: 'xazinam',
        })
    } catch (error) {
        console.log(error)
    }
}
export const loyihalarPage = (req, res, next) => {
    try {
        res.render('my page/loyihalar.ejs', {
            title: 'loyihalar',
        })
    } catch (error) {
        console.log(error)
    }
}