let mix = require('laravel-mix');
require('laravel-mix-twig-to-html');
require('laravel-mix-clean');
require('laravel-mix-tailwind');
require('laravel-mix-svg-sprite');

mix
    .js('src/js/app.js', 'js')
    .js('src/js/libs.js', 'js')
    .webpackConfig({
        output: {
            chunkFilename: 'js/chunks/[name].js?id=[chunkhash]',
            publicPath: '/',
        }
    })
    .sass('src/sass/app.sass', 'css')
    .tailwind()
    .twigToHtml({
        files: 'src/twig/**/*.{twig,html}',
        fileBase: 'src/twig',
        twigOptions: {
            data: {},
            namespaces: {
                l: 'src/twig/_layouts',
                c: 'src/twig/_components',
            }
        },
    })
    .svgSprite(
        'src/svg', // The directory containing your svg files
        'sprite.svg', // The output path for the sprite
    )
    .setPublicPath('dist')
    .clean({
        cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
        cleanAfterEveryBuildPatterns: ['!img/**/*', '!fonts/**/*', '!**/*.html'],
        verbose: true,
        dry: false
    })
    .copy('src/images', 'dist/images')
    .copy('src/fonts', 'dist/fonts')

if (!mix.inProduction()) {
    mix
        .webpackConfig({devtool: "source-map"})
        .browserSync({
            proxy: false,
            port: 8081,
            server: {
                baseDir: 'dist'
            },
            watch: true
        })
        .sourceMaps()
}