import corelDraw from '../../models/courses/corelDraw.js'
export const coursesCorelDraw = async (req, res, next) => {
    try {
        const allCourses = await corelDraw.find()
        console.log(allCourses)
        res.render('my page/corelDrawCourses.ejs', {
            title: 'kurslar',
            allCourses,
        })
    } catch (error) {
        console.log(error)
    }
}
