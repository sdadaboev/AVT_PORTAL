import illustrator from '../../models/courses/illustrator.js'

export const courseIllustrator = async (req, res, next) => {
    try {
        const allCourses = await illustrator.find()
        console.log(allCourses)
        res.render('my page/illustrator.ejs', {
            title: 'kurslar',
            allCourses,
        })
    } catch (error) {
        console.log(error)
    }
}
