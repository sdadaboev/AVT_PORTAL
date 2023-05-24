import figma from '../../models/courses/figma.js'
export const coursesFigma = async (req, res, next) => {
    try {
        const allCourses = await figma.find()
        console.log(allCourses)
        res.render('my page/figmaCourses.ejs', {
            title: 'kurslar',
            allCourses,
        })
    } catch (error) {
        console.log(error)
    }
}
