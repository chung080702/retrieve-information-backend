interface ShortPost {
    id: number;
    title: string;
    shortContent: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
}

interface ListPost {
    posts: ShortPost[];
    count: number;
    time: number;
}


export function search(msg: string, pageNumber: number): ListPost {
    const start = new Date();

    var post: ShortPost = {
        id: 1,
        title: 'Tiếng Anh 123',
        shortContent: 'Tienganh123.Com là website học tiếng Anh online trên mạng cho mọi trình độ. Với những bài học tiếng Anh phong phú, đa dạng, dễ hiểu, các bạn có thể nâng cao ...'
    }

    const end = new Date();

    const time = end.getTime() - start.getTime();
    return {
        posts: Array(10).fill(post),
        count: 30,
        time
    }
}

export function getPost(id: number): Post {
    return {
        id: 1,
        title: 'Tiếng Anh 123',
        content: 'Tiếng Anh hiện đại lan rộng khắp thế giới kể từ thế kỷ 17 nhờ tầm ảnh hưởng toàn cầu của Đế quốc Anh và Hoa Kỳ. Thông qua các loại hình in ấn và phương tiện truyền thông đại chúng của những quốc gia này, vị thế tiếng Anh đã được nâng lên hàng đầu trong diễn ngôn quốc tế, giúp nó trở thành lingua franca tại nhiều khu vực trên thế giới và trong nhiều bối cảnh chuyên môn như khoa học, hàng hải và luật pháp.[4] Tiếng Anh là ngôn ngữ có số lượng người nói đông đảo nhất trên thế giới,[15] và có số lượng người nói bản ngữ nhiều thứ ba trên thế giới, chỉ sau tiếng Trung Quốc chuẩn và tiếng Tây Ban Nha.[16] Tiếng Anh là ngoại ngữ được nhiều người học nhất và là ngôn ngữ chính thức hoặc đồng chính thức của 59 quốc gia trên thế giới. Hiện nay số người biết nói tiếng Anh như một ngoại ngữ đã áp đảo hơn số người nói tiếng Anh bản ngữ. Tính đến năm 2005, lượng người nói tiếng Anh đã cán mốc xấp xỉ 2 tỷ.[17] Tiếng Anh là bản ngữ đa số tại Vương quốc Anh, Hoa Kỳ, Canada, Úc, New Zealand (xem vùng văn hóa tiếng Anh) và Cộng hòa Ireland. Nó được sử dụng phổ biến ở một số vùng thuộc Caribê, Châu Phi, Nam Á, Đông Nam Á, và Châu Đại Dương.[18] Tiếng Anh là ngôn ngữ đồng chính thức của Liên Hợp Quốc, Liên minh châu Âu, cùng nhiều tổ chức quốc tế và khu vực. Ngoài ra nó cũng là ngôn ngữ Giécmanh được sử dụng rộng rãi nhất, với lượng người nói chiếm ít nhất 70% tổng số người nói các ngôn ngữ thuộc nhánh Ấn-Âu này.'
    }
}