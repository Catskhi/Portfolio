export function ProfilePicture() {
    return (
        <div className='
            h-[175px] w-[175px] rounded-[100%]
            mt-14
            md:ml-44
            md:mt-0
            md:h-[200px]
            md:w-[200px]
            border-2 border-cyan-400
            bg-no-repeat bg-cover
            transition-all duration-300
        '
        style={{
            backgroundImage: 'url(src/media/Foto_de_perfil2.png)'
        }}>
            
        </div>
    )
}