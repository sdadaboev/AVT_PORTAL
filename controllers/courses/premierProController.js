import premierPro from '../../models/courses/premierPro.js'

export const coursePremierPro = async (req, res, next) => {
    try {
        const allCourses = await premierPro.find()
        console.log(allCourses)
        res.render('my page/premierPro.ejs', {
            title: 'kurslar',
            allCourses,
        })
    } catch (error) {
        console.log(error)
    }
}
