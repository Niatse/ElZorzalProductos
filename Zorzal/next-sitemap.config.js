const URL = 'https://el-zorzal-productos.vercel.app/'
module.exports={
    siteUrl: URL,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow:"/"},
        ],  
    },  
}