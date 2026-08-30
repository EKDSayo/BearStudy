/* =========================================================
   STUDYBEAR - CLEAN V5
   - Individual local accounts
   - Profile
   - Interface language: VI / EN / KO
   - Learning language: VI / EN / KO / RU
   - Native language is the primary/reference language
   - Vocabulary topics
   - Browser voices
========================================================= */

const vocabulary = [
  { vi:"dụng cụ", en:"tool / instrument", ko:"도구", ru:"инструмент", zh:"工具", pinyin:"gōng jù", topic:"writing" },
  { vi:"dụng cụ viết", en:"writing instrument", ko:"필기 도구", ru:"письменный инструмент", zh:"书写工具", pinyin:"shū xiě gōng jù", topic:"writing" },
  { vi:"bút bi", en:"ballpoint pen", ko:"볼펜", ru:"шариковая ручка", zh:"圆珠笔", pinyin:"yuán zhū bǐ", topic:"writing" },
  { vi:"cuộc sống", en:"life / daily life", ko:"생활", ru:"жизнь / повседневная жизнь", zh:"生活", pinyin:"shēng huó", topic:"daily" },
  { vi:"cần thiết", en:"necessary / essential", ko:"필요하다 / 필수적이다", ru:"необходимый / обязательный", zh:"必要的 / 必需的", topic:"daily" },
  { vi:"quan trọng", en:"important", ko:"중요하다", ru:"важный", zh:"重要的", topic:"daily" },
  { vi:"sử dụng", en:"use", ko:"사용하다", ru:"использовать", zh:"使用", pinyin:"shǐ yòng", topic:"writing" },
  { vi:"ghi chú", en:"take notes / note down", ko:"메모하다", ru:"делать заметки", zh:"做笔记", pinyin:"zuò bǐ jì", topic:"writing" },
  { vi:"thông tin", en:"information", ko:"정보", ru:"информация", zh:"信息", pinyin:"xìn xī", topic:"daily" },
  { vi:"viết", en:"write", ko:"쓰다", ru:"писать", zh:"写", pinyin:"xiě", topic:"writing" },
  { vi:"ký", en:"sign", ko:"서명하다", ru:"подписывать", zh:"签名", pinyin:"qiān míng", topic:"writing" },
  { vi:"hợp đồng", en:"contract", ko:"계약서", ru:"договор", zh:"合同", pinyin:"hé tóng", topic:"daily" },
  { vi:"phát minh", en:"invention", ko:"발명", ru:"изобретение", zh:"发明", pinyin:"fā míng", topic:"history" },
  { vi:"phát minh ra", en:"invent", ko:"발명하다", ru:"изобретать", zh:"发明", pinyin:"fā míng", topic:"history" },
  { vi:"ra đời", en:"come into existence / be invented", ko:"탄생하다 / 발명되다", ru:"появиться / быть изобретённым", zh:"诞生 / 被发明", pinyin:"dàn shēng / bèi fā míng", topic:"history" },
  { vi:"lịch sử", en:"history", ko:"역사", ru:"история", zh:"历史", pinyin:"lì shǐ", topic:"history" },
  { vi:"hoàn cảnh", en:"circumstances / background", ko:"상황 / 배경", ru:"обстоятельства / фон", zh:"情况 / 背景", pinyin:"qíng kuàng / bèi jǐng", topic:"history" },
  { vi:"mục đích", en:"purpose", ko:"목적", ru:"цель", zh:"目的", pinyin:"mù dì", topic:"history" },
  { vi:"nguyên lý", en:"principle", ko:"원리", ru:"принцип", zh:"原理", pinyin:"yuán lǐ", topic:"mechanism" },
  { vi:"hoạt động", en:"operate / function", ko:"작동하다", ru:"работать / функционировать", zh:"运行 / 运作", pinyin:"yùn xíng / yùn zuò", topic:"mechanism" },
  { vi:"cấu tạo", en:"structure / construction", ko:"구조", ru:"конструкция / структура", zh:"结构 / 构造", pinyin:"jié gòu / gòu zào", topic:"mechanism" },
  { vi:"bộ phận", en:"component / part", ko:"부품 / 부분", ru:"деталь / часть", zh:"部件 / 部分", pinyin:"bù jiàn / bù fèn", topic:"mechanism" },
  { vi:"chi tiết", en:"detail / component", ko:"세부 / 부품", ru:"деталь / компонент", zh:"细节 / 部件", pinyin:"xì jié / bù jiàn", topic:"mechanism" },
  { vi:"chức năng", en:"function", ko:"기능", ru:"функция", zh:"功能", pinyin:"gōng néng", topic:"mechanism" },
  { vi:"cơ chế", en:"mechanism", ko:"메커니즘 / 원리", ru:"механизм", zh:"机制 / 原理", pinyin:"jī zhì / yuán lǐ", topic:"mechanism" },
  { vi:"quá trình", en:"process", ko:"과정", ru:"процесс", zh:"过程", pinyin:"guò chéng", topic:"mechanism" },
  { vi:"hiện tượng", en:"phenomenon", ko:"현상", ru:"явление", zh:"现象", pinyin:"xiàn xiàng", topic:"history" },
  { vi:"bề mặt", en:"surface", ko:"표면", ru:"поверхность", zh:"表面", pinyin:"biǎo miàn", topic:"mechanism" }
];

/* Expanded curated vocabulary for StudyBear */
vocabulary.push(...[{"vi":"xin chào","en":"hello","ko":"안녕하세요","ru":"привет","zh":"你好","pinyin":"nǐ hǎo","topic":"daily","level":"beginner"},{"vi":"chào / tạm biệt","en":"hi / bye","ko":"안녕","ru":"привет / пока","zh":"嗨 / 再见","pinyin":"hāi / zài jiàn","topic":"daily","level":"beginner"},{"vi":"cảm ơn","en":"to thank","ko":"감사하다","ru":"благодарить","zh":"感谢","pinyin":"gǎn xiè","topic":"daily","level":"beginner"},{"vi":"xin cảm ơn","en":"thank you","ko":"감사합니다","ru":"спасибо","zh":"谢谢","pinyin":"xiè xie","topic":"daily","level":"beginner"},{"vi":"xin lỗi","en":"to be sorry","ko":"미안하다","ru":"извиняться","zh":"抱歉","pinyin":"bào qiàn","topic":"daily","level":"beginner"},{"vi":"ổn / không sao","en":"to be okay","ko":"괜찮다","ru":"быть в порядке","zh":"没关系","pinyin":"méi guān xi","topic":"daily","level":"beginner"},{"vi":"nhờ / yêu cầu","en":"to ask a favor","ko":"부탁하다","ru":"просить об одолжении","zh":"请求","pinyin":"qǐng qiú","topic":"daily","level":"beginner"},{"vi":"giúp","en":"to help","ko":"도와주다","ru":"помогать","zh":"帮助","pinyin":"bāng zhù","topic":"daily","level":"beginner"},{"vi":"cuộc trò chuyện","en":"conversation","ko":"대화","ru":"разговор","zh":"对话","pinyin":"duì huà","topic":"communication","level":"intermediate"},{"vi":"câu trả lời","en":"answer","ko":"대답","ru":"ответ","zh":"回答","pinyin":"huí dá","topic":"communication","level":"beginner"},{"vi":"câu hỏi","en":"question","ko":"질문","ru":"вопрос","zh":"问题","pinyin":"wèn tí","topic":"communication","level":"beginner"},{"vi":"giải thích","en":"explanation","ko":"설명","ru":"объяснение","zh":"说明","pinyin":"shuō míng","topic":"communication","level":"intermediate"},{"vi":"ý kiến","en":"opinion","ko":"의견","ru":"мнение","zh":"意见","pinyin":"yì jiàn","topic":"communication","level":"intermediate"},{"vi":"lời hứa / cuộc hẹn","en":"promise / appointment","ko":"약속","ru":"обещание / встреча","zh":"约定","pinyin":"yuē dìng","topic":"communication","level":"beginner"},{"vi":"liên lạc","en":"contact","ko":"연락","ru":"контакт / связь","zh":"联系","pinyin":"lián xì","topic":"communication","level":"intermediate"},{"vi":"người","en":"person","ko":"사람","ru":"человек","zh":"人","pinyin":"rén","topic":"people","level":"beginner"},{"vi":"đàn ông","en":"man","ko":"남자","ru":"мужчина","zh":"男人","pinyin":"nán rén","topic":"people","level":"beginner"},{"vi":"phụ nữ","en":"woman","ko":"여자","ru":"женщина","zh":"女人","pinyin":"nǚ rén","topic":"people","level":"beginner"},{"vi":"trẻ em","en":"child","ko":"아이","ru":"ребёнок","zh":"孩子","pinyin":"hái zi","topic":"people","level":"beginner"},{"vi":"bố mẹ","en":"parents","ko":"부모","ru":"родители","zh":"父母","pinyin":"fù mǔ","topic":"people","level":"beginner"},{"vi":"con trai","en":"son","ko":"아들","ru":"сын","zh":"儿子","pinyin":"ér zi","topic":"people","level":"beginner"},{"vi":"con gái","en":"daughter","ko":"딸","ru":"дочь","zh":"女儿","pinyin":"nǚ ér","topic":"people","level":"beginner"},{"vi":"chồng","en":"husband","ko":"남편","ru":"муж","zh":"丈夫","pinyin":"zhàng fu","topic":"people","level":"beginner"},{"vi":"vợ","en":"wife","ko":"아내","ru":"жена","zh":"妻子","pinyin":"qī zi","topic":"people","level":"beginner"},{"vi":"gia đình","en":"family","ko":"가족","ru":"семья","zh":"家庭","pinyin":"jiā tíng","topic":"people","level":"beginner"},{"vi":"họ hàng","en":"relative","ko":"친척","ru":"родственник","zh":"亲戚","pinyin":"qīn qi","topic":"people","level":"beginner"},{"vi":"hàng xóm","en":"neighbor","ko":"이웃","ru":"сосед","zh":"邻居","pinyin":"lín jū","topic":"people","level":"beginner"},{"vi":"bạn bè","en":"friend","ko":"친구","ru":"друг","zh":"朋友","pinyin":"péng you","topic":"beginner","level":"beginner"},{"vi":"đồng nghiệp","en":"colleague","ko":"동료","ru":"коллега","zh":"同事","pinyin":"tóng shì","topic":"work","level":"intermediate"},{"vi":"khách hàng","en":"customer","ko":"고객","ru":"клиент","zh":"客户","pinyin":"kè hù","topic":"work","level":"intermediate"},{"vi":"một ngày","en":"one day / daily","ko":"하루","ru":"день","zh":"一天","pinyin":"yì tiān","topic":"time","level":"beginner"},{"vi":"thường nhật","en":"daily routine","ko":"일상","ru":"повседневная жизнь","zh":"日常","pinyin":"rì cháng","topic":"daily","level":"intermediate"},{"vi":"thói quen","en":"habit","ko":"습관","ru":"привычка","zh":"习惯","pinyin":"xí guàn","topic":"daily","level":"intermediate"},{"vi":"chuẩn bị","en":"preparation","ko":"준비","ru":"подготовка","zh":"准备","pinyin":"zhǔn bèi","topic":"daily","level":"beginner"},{"vi":"bắt đầu","en":"start / beginning","ko":"시작","ru":"начало","zh":"开始","pinyin":"kāi shǐ","topic":"daily","level":"beginner"},{"vi":"kết thúc","en":"end","ko":"끝","ru":"конец","zh":"结束","pinyin":"jié shù","topic":"daily","level":"beginner"},{"vi":"nhu cầu","en":"need","ko":"필요","ru":"необходимость","zh":"需要","pinyin":"xū yào","topic":"daily","level":"beginner"},{"vi":"vấn đề","en":"problem","ko":"문제","ru":"проблема","zh":"问题","pinyin":"wèn tí","topic":"daily","level":"beginner"},{"vi":"phương pháp","en":"method / way","ko":"방법","ru":"метод / способ","zh":"方法","pinyin":"fāng fǎ","topic":"study","level":"intermediate"},{"vi":"lý do","en":"reason","ko":"이유","ru":"причина","zh":"理由","pinyin":"lǐ yóu","topic":"study","level":"intermediate"},{"vi":"kết quả","en":"result","ko":"결과","ru":"результат","zh":"结果","pinyin":"jié guǒ","topic":"study","level":"intermediate"},{"vi":"kinh nghiệm","en":"experience","ko":"경험","ru":"опыт","zh":"经验","pinyin":"jīng yàn","topic":"study","level":"intermediate"},{"vi":"cơ hội","en":"opportunity","ko":"기회","ru":"возможность","zh":"机会","pinyin":"jī huì","topic":"study","level":"intermediate"},{"vi":"kế hoạch","en":"plan","ko":"계획","ru":"план","zh":"计划","pinyin":"jì huà","topic":"study","level":"intermediate"},{"vi":"mục tiêu","en":"goal","ko":"목표","ru":"цель","zh":"目标","pinyin":"mù biāo","topic":"study","level":"intermediate"},{"vi":"giáo dục","en":"education","ko":"교육","ru":"образование","zh":"教育","pinyin":"jiào yù","topic":"study","level":"intermediate"},{"vi":"học tập","en":"study","ko":"공부","ru":"учёба","zh":"学习","pinyin":"xué xí","topic":"study","level":"beginner"},{"vi":"học","en":"to learn","ko":"배우다","ru":"учиться","zh":"学习","pinyin":"xué xí","topic":"study","level":"beginner"},{"vi":"dạy","en":"to teach","ko":"가르치다","ru":"учить","zh":"教","pinyin":"jiāo","topic":"study","level":"beginner"},{"vi":"lớp học","en":"class / lesson","ko":"수업","ru":"занятие","zh":"课","pinyin":"kè","topic":"study","level":"beginner"},{"vi":"môn học","en":"subject","ko":"과목","ru":"предмет","zh":"科目","pinyin":"kē mù","topic":"study","level":"beginner"},{"vi":"bài tập","en":"homework","ko":"숙제","ru":"домашнее задание","zh":"作业","pinyin":"zuò yè","topic":"study","level":"beginner"},{"vi":"kỳ thi","en":"exam","ko":"시험","ru":"экзамен","zh":"考试","pinyin":"kǎo shì","topic":"study","level":"beginner"},{"vi":"thành tích / điểm số","en":"grade / academic result","ko":"성적","ru":"оценка","zh":"成绩","pinyin":"chéng jì","topic":"study","level":"intermediate"},{"vi":"điểm","en":"score","ko":"점수","ru":"балл","zh":"分数","pinyin":"fēn shù","topic":"study","level":"beginner"},{"vi":"đỗ / đạt","en":"passing / pass","ko":"합격","ru":"успешная сдача","zh":"合格","pinyin":"hé gé","topic":"study","level":"intermediate"},{"vi":"không đạt","en":"failure to pass","ko":"불합격","ru":"неудача","zh":"不合格","pinyin":"bù hé gé","topic":"study","level":"intermediate"},{"vi":"đơn ứng tuyển","en":"application form","ko":"지원서","ru":"заявление","zh":"申请表","pinyin":"shēn qǐng biǎo","topic":"work","level":"intermediate"},{"vi":"tư cách / bằng cấp","en":"qualification","ko":"자격","ru":"квалификация","zh":"资格","pinyin":"zī gé","topic":"work","level":"advanced"},{"vi":"năng lực","en":"ability","ko":"능력","ru":"способность","zh":"能力","pinyin":"néng lì","topic":"study","level":"intermediate"},{"vi":"luyện tập","en":"practice","ko":"연습","ru":"практика","zh":"练习","pinyin":"liàn xí","topic":"study","level":"beginner"},{"vi":"ôn tập","en":"review","ko":"복습","ru":"повторение","zh":"复习","pinyin":"fù xí","topic":"study","level":"beginner"},{"vi":"xem bài trước","en":"preview / pre-study","ko":"예습","ru":"предварительное изучение","zh":"预习","pinyin":"yù xí","topic":"study","level":"intermediate"},{"vi":"thuyết trình","en":"presentation","ko":"발표","ru":"презентация","zh":"发表 / 演讲","pinyin":"fā biǎo / yǎn jiǎng","topic":"study","level":"intermediate"},{"vi":"tài liệu","en":"materials / data","ko":"자료","ru":"материалы / данные","zh":"资料","pinyin":"zī liào","topic":"study","level":"intermediate"},{"vi":"nghiên cứu","en":"research","ko":"연구","ru":"исследование","zh":"研究","pinyin":"yán jiū","topic":"study","level":"advanced"},{"vi":"nghề nghiệp","en":"job / occupation","ko":"직업","ru":"профессия","zh":"职业","pinyin":"zhí yè","topic":"work","level":"beginner"},{"vi":"việc làm","en":"job position","ko":"일자리","ru":"рабочее место","zh":"工作岗位","pinyin":"gōng zuò gǎng wèi","topic":"work","level":"intermediate"},{"vi":"công ty","en":"company","ko":"회사","ru":"компания","zh":"公司","pinyin":"gōng sī","topic":"work","level":"beginner"},{"vi":"nhân viên","en":"employee","ko":"직원","ru":"сотрудник","zh":"员工","pinyin":"yuán gōng","topic":"work","level":"beginner"},{"vi":"ông chủ / giám đốc","en":"boss / owner","ko":"사장","ru":"директор / владелец","zh":"老板","pinyin":"lǎo bǎn","topic":"work","level":"beginner"},{"vi":"trưởng phòng","en":"department head","ko":"부장","ru":"начальник отдела","zh":"部长","pinyin":"bù zhǎng","topic":"work","level":"advanced"},{"vi":"cuộc họp","en":"meeting","ko":"회의","ru":"совещание","zh":"会议","pinyin":"huì yì","topic":"work","level":"intermediate"},{"vi":"công việc / nhiệm vụ","en":"work / duties","ko":"업무","ru":"рабочие обязанности","zh":"业务","pinyin":"yè wù","topic":"work","level":"intermediate"},{"vi":"làm việc","en":"work / service","ko":"근무","ru":"работа / служба","zh":"工作","pinyin":"gōng zuò","topic":"work","level":"intermediate"},{"vi":"lương tháng","en":"monthly salary","ko":"월급","ru":"зарплата","zh":"月薪","pinyin":"yuè xīn","topic":"work","level":"beginner"},{"vi":"tiền lương","en":"salary / pay","ko":"급여","ru":"зарплата / оплата","zh":"工资","pinyin":"gōng zī","topic":"work","level":"intermediate"},{"vi":"hợp đồng","en":"contract","ko":"계약","ru":"договор","zh":"合同","pinyin":"hé tóng","topic":"work","level":"intermediate"},{"vi":"tuyển dụng","en":"recruitment","ko":"채용","ru":"найм","zh":"招聘","pinyin":"zhāo pìn","topic":"work","level":"intermediate"},{"vi":"ứng tuyển / hỗ trợ","en":"application / support","ko":"지원","ru":"заявление / поддержка","zh":"申请 / 支持","pinyin":"shēn qǐng / zhī chí","topic":"work","level":"intermediate"},{"vi":"kinh nghiệm làm việc","en":"career / work experience","ko":"경력","ru":"опыт работы","zh":"工作经历","pinyin":"gōng zuò jīng lì","topic":"work","level":"intermediate"},{"vi":"kinh tế","en":"economy","ko":"경제","ru":"экономика","zh":"经济","pinyin":"jīng jì","topic":"economy","level":"advanced"},{"vi":"thị trường","en":"market","ko":"시장","ru":"рынок","zh":"市场","pinyin":"shì chǎng","topic":"economy","level":"intermediate"},{"vi":"giá cả","en":"price","ko":"가격","ru":"цена","zh":"价格","pinyin":"jià gé","topic":"economy","level":"beginner"},{"vi":"chi phí","en":"cost","ko":"비용","ru":"стоимость","zh":"费用","pinyin":"fèi yòng","topic":"economy","level":"intermediate"},{"vi":"thu nhập","en":"income","ko":"소득","ru":"доход","zh":"收入","pinyin":"shōu rù","topic":"economy","level":"advanced"},{"vi":"tiêu dùng","en":"consumption","ko":"소비","ru":"потребление","zh":"消费","pinyin":"xiāo fèi","topic":"economy","level":"intermediate"},{"vi":"sản xuất","en":"production","ko":"생산","ru":"производство","zh":"生产","pinyin":"shēng chǎn","topic":"economy","level":"advanced"},{"vi":"doanh nghiệp","en":"enterprise","ko":"기업","ru":"предприятие","zh":"企业","pinyin":"qǐ yè","topic":"economy","level":"advanced"},{"vi":"sản phẩm / hàng hóa","en":"product / goods","ko":"상품","ru":"товар","zh":"商品","pinyin":"shāng pǐn","topic":"economy","level":"intermediate"},{"vi":"cửa hàng","en":"store","ko":"가게","ru":"магазин","zh":"商店","pinyin":"shāng diàn","topic":"shopping","level":"beginner"},{"vi":"đồ vật / hàng hóa","en":"thing / item / goods","ko":"물건","ru":"вещь / товар","zh":"东西","pinyin":"dōng xi","topic":"shopping","level":"beginner"},{"vi":"mua","en":"to buy","ko":"사다","ru":"покупать","zh":"买","pinyin":"mǎi","topic":"shopping","level":"beginner"},{"vi":"bán","en":"to sell","ko":"팔다","ru":"продавать","zh":"卖","pinyin":"mài","topic":"shopping","level":"beginner"},{"vi":"đặt hàng","en":"order","ko":"주문","ru":"заказ","zh":"订单","pinyin":"dìng dān","topic":"shopping","level":"beginner"},{"vi":"hóa đơn","en":"receipt","ko":"영수증","ru":"квитанция","zh":"收据","pinyin":"shōu jù","topic":"shopping","level":"beginner"},{"vi":"tiền mặt","en":"cash","ko":"현금","ru":"наличные","zh":"现金","pinyin":"xiàn jīn","topic":"shopping","level":"beginner"},{"vi":"thẻ","en":"card","ko":"카드","ru":"карта","zh":"卡","pinyin":"kǎ","topic":"shopping","level":"beginner"},{"vi":"giảm giá","en":"discount","ko":"할인","ru":"скидка","zh":"折扣","pinyin":"zhé kòu","topic":"shopping","level":"beginner"},{"vi":"miễn phí","en":"free of charge","ko":"무료","ru":"бесплатно","zh":"免费","pinyin":"miǎn fèi","topic":"shopping","level":"beginner"},{"vi":"đắt","en":"to be expensive","ko":"비싸다","ru":"быть дорогим","zh":"贵","pinyin":"guì","topic":"shopping","level":"beginner"},{"vi":"rẻ","en":"to be cheap","ko":"싸다","ru":"быть дешёвым","zh":"便宜","pinyin":"pián yi","topic":"shopping","level":"beginner"},{"vi":"đổi hàng","en":"exchange","ko":"교환","ru":"обмен","zh":"交换","pinyin":"jiāo huàn","topic":"shopping","level":"intermediate"},{"vi":"hoàn tiền","en":"refund","ko":"환불","ru":"возврат денег","zh":"退款","pinyin":"tuì kuǎn","topic":"shopping","level":"intermediate"},{"vi":"bữa ăn","en":"meal","ko":"식사","ru":"приём пищи","zh":"用餐","pinyin":"yòng cān","topic":"food","level":"beginner"},{"vi":"bữa sáng / buổi sáng","en":"breakfast / morning","ko":"아침","ru":"завтрак / утро","zh":"早餐 / 早上","pinyin":"zǎo cān / zǎo shang","topic":"food","level":"beginner"},{"vi":"bữa trưa","en":"lunch","ko":"점심","ru":"обед","zh":"午饭","pinyin":"wǔ fàn","topic":"food","level":"beginner"},{"vi":"bữa tối / buổi tối","en":"dinner / evening","ko":"저녁","ru":"ужин / вечер","zh":"晚饭 / 晚上","pinyin":"wǎn fàn / wǎn shang","topic":"food","level":"beginner"},{"vi":"nấu ăn / món ăn","en":"cooking / dish","ko":"요리","ru":"готовка / блюдо","zh":"料理","pinyin":"liào lǐ","topic":"food","level":"beginner"},{"vi":"vị","en":"taste","ko":"맛","ru":"вкус","zh":"味道","pinyin":"wèi dào","topic":"food","level":"beginner"},{"vi":"ngon","en":"delicious","ko":"맛있다","ru":"вкусный","zh":"好吃","pinyin":"hǎo chī","topic":"food","level":"beginner"},{"vi":"sức khỏe","en":"health","ko":"건강","ru":"здоровье","zh":"健康","pinyin":"jiàn kāng","topic":"health","level":"beginner"},{"vi":"bệnh viện","en":"hospital","ko":"병원","ru":"больница","zh":"医院","pinyin":"yī yuàn","topic":"health","level":"beginner"},{"vi":"thuốc","en":"medicine","ko":"약","ru":"лекарство","zh":"药","pinyin":"yào","topic":"health","level":"beginner"},{"vi":"cảm cúm","en":"cold","ko":"감기","ru":"простуда","zh":"感冒","pinyin":"gǎn mào","topic":"health","level":"beginner"},{"vi":"triệu chứng","en":"symptom","ko":"증상","ru":"симптом","zh":"症状","pinyin":"zhèng zhuàng","topic":"health","level":"intermediate"},{"vi":"điều trị","en":"treatment","ko":"치료","ru":"лечение","zh":"治疗","pinyin":"zhì liáo","topic":"health","level":"intermediate"},{"vi":"tập thể dục","en":"exercise","ko":"운동","ru":"упражнение","zh":"运动","pinyin":"yùn dòng","topic":"health","level":"beginner"},{"vi":"căng thẳng","en":"stress","ko":"스트레스","ru":"стресс","zh":"压力","pinyin":"yā lì","topic":"health","level":"intermediate"},{"vi":"nghỉ ngơi","en":"rest","ko":"휴식","ru":"отдых","zh":"休息","pinyin":"xiū xi","topic":"health","level":"beginner"},{"vi":"nhà","en":"house / home","ko":"집","ru":"дом","zh":"家","pinyin":"jiā","topic":"home","level":"beginner"},{"vi":"phòng","en":"room","ko":"방","ru":"комната","zh":"房间","pinyin":"fáng jiān","topic":"home","level":"beginner"},{"vi":"bếp","en":"kitchen","ko":"부엌","ru":"кухня","zh":"厨房","pinyin":"chú fáng","topic":"home","level":"beginner"},{"vi":"nhà tắm / toilet","en":"bathroom / toilet","ko":"화장실","ru":"ванная / туалет","zh":"卫生间","pinyin":"wèi shēng jiān","topic":"home","level":"beginner"},{"vi":"giường","en":"bed","ko":"침대","ru":"кровать","zh":"床","pinyin":"chuáng","topic":"home","level":"beginner"},{"vi":"bàn học","en":"desk","ko":"책상","ru":"письменный стол","zh":"书桌","pinyin":"shū zhuō","topic":"home","level":"beginner"},{"vi":"ghế","en":"chair","ko":"의자","ru":"стул","zh":"椅子","pinyin":"yǐ zi","topic":"home","level":"beginner"},{"vi":"cửa sổ","en":"window","ko":"창문","ru":"окно","zh":"窗户","pinyin":"chuāng hu","topic":"home","level":"beginner"},{"vi":"dọn dẹp","en":"cleaning","ko":"청소","ru":"уборка","zh":"打扫","pinyin":"dǎ sǎo","topic":"home","level":"beginner"},{"vi":"rác","en":"trash","ko":"쓰레기","ru":"мусор","zh":"垃圾","pinyin":"lā jī","topic":"home","level":"beginner"},{"vi":"giặt giũ","en":"laundry","ko":"세탁","ru":"стирка","zh":"洗衣","pinyin":"xǐ yī","topic":"home","level":"intermediate"},{"vi":"du lịch","en":"travel","ko":"여행","ru":"путешествие","zh":"旅行","pinyin":"lǚ xíng","topic":"travel","level":"beginner"},{"vi":"giao thông","en":"transportation","ko":"교통","ru":"транспорт","zh":"交通","pinyin":"jiāo tōng","topic":"travel","level":"intermediate"},{"vi":"ô tô","en":"car","ko":"자동차","ru":"автомобиль","zh":"汽车","pinyin":"qì chē","topic":"travel","level":"beginner"},{"vi":"xe buýt","en":"bus","ko":"버스","ru":"автобус","zh":"公交车","pinyin":"gōng jiāo chē","topic":"travel","level":"beginner"},{"vi":"tàu điện ngầm","en":"subway","ko":"지하철","ru":"метро","zh":"地铁","pinyin":"dì tiě","topic":"travel","level":"beginner"},{"vi":"tàu hỏa","en":"train","ko":"기차","ru":"поезд","zh":"火车","pinyin":"huǒ chē","topic":"travel","level":"beginner"},{"vi":"máy bay","en":"airplane","ko":"비행기","ru":"самолёт","zh":"飞机","pinyin":"fēi jī","topic":"travel","level":"beginner"},{"vi":"sân bay","en":"airport","ko":"공항","ru":"аэропорт","zh":"机场","pinyin":"jī chǎng","topic":"travel","level":"beginner"},{"vi":"nhà ga","en":"station","ko":"역","ru":"станция","zh":"车站","pinyin":"chē zhàn","topic":"travel","level":"beginner"},{"vi":"đường","en":"road / way","ko":"길","ru":"дорога","zh":"路","pinyin":"lù","topic":"travel","level":"beginner"},{"vi":"địa chỉ","en":"address","ko":"주소","ru":"адрес","zh":"地址","pinyin":"dì zhǐ","topic":"travel","level":"beginner"},{"vi":"bản đồ","en":"map","ko":"지도","ru":"карта","zh":"地图","pinyin":"dì tú","topic":"travel","level":"beginner"},{"vi":"đặt chỗ","en":"reservation","ko":"예약","ru":"бронирование","zh":"预约","pinyin":"yù yuē","topic":"travel","level":"intermediate"},{"vi":"khởi hành","en":"departure","ko":"출발","ru":"отправление","zh":"出发","pinyin":"chū fā","topic":"travel","level":"beginner"},{"vi":"đến nơi","en":"arrival","ko":"도착","ru":"прибытие","zh":"到达","pinyin":"dào dá","topic":"travel","level":"beginner"},{"vi":"vé","en":"ticket","ko":"표","ru":"билет","zh":"票","pinyin":"piào","topic":"travel","level":"beginner"},{"vi":"ngày tháng","en":"date","ko":"날짜","ru":"дата","zh":"日期","pinyin":"rì qī","topic":"time","level":"beginner"},{"vi":"thứ trong tuần","en":"day of week","ko":"요일","ru":"день недели","zh":"星期","pinyin":"xīng qī","topic":"time","level":"beginner"},{"vi":"cuối tuần","en":"weekend","ko":"주말","ru":"выходные","zh":"周末","pinyin":"zhōu mò","topic":"time","level":"beginner"},{"vi":"ngày thường","en":"weekday","ko":"평일","ru":"будний день","zh":"工作日","pinyin":"gōng zuò rì","topic":"time","level":"intermediate"},{"vi":"tuần này","en":"this week","ko":"이번 주","ru":"на этой неделе","zh":"这周","pinyin":"zhè zhōu","topic":"time","level":"beginner"},{"vi":"tháng trước","en":"last month","ko":"지난달","ru":"прошлый месяц","zh":"上个月","pinyin":"shàng ge yuè","topic":"time","level":"beginner"},{"vi":"năm sau","en":"next year","ko":"내년","ru":"следующий год","zh":"明年","pinyin":"míng nián","topic":"time","level":"beginner"},{"vi":"gần đây","en":"recently","ko":"최근","ru":"недавно","zh":"最近","pinyin":"zuì jìn","topic":"time","level":"intermediate"},{"vi":"trước đây","en":"in the past","ko":"예전","ru":"раньше","zh":"以前","pinyin":"yǐ qián","topic":"time","level":"intermediate"},{"vi":"trong / suốt","en":"during / for","ko":"동안","ru":"в течение","zh":"期间","pinyin":"qī jiān","topic":"time","level":"intermediate"},{"vi":"bởi vì / do","en":"because of","ko":"때문","ru":"из-за","zh":"因为","pinyin":"yīn wèi","topic":"time","level":"intermediate"},{"vi":"môi trường","en":"environment","ko":"환경","ru":"окружающая среда","zh":"环境","pinyin":"huán jìng","topic":"environment","level":"intermediate"},{"vi":"thiên nhiên","en":"nature","ko":"자연","ru":"природа","zh":"自然","pinyin":"zì rán","topic":"environment","level":"beginner"},{"vi":"khí hậu","en":"climate","ko":"기후","ru":"климат","zh":"气候","pinyin":"qì hòu","topic":"environment","level":"advanced"},{"vi":"thời tiết","en":"weather","ko":"날씨","ru":"погода","zh":"天气","pinyin":"tiān qì","topic":"environment","level":"beginner"},{"vi":"ô nhiễm","en":"pollution","ko":"오염","ru":"загрязнение","zh":"污染","pinyin":"wū rǎn","topic":"environment","level":"advanced"},{"vi":"tái chế","en":"recycling","ko":"재활용","ru":"переработка","zh":"回收","pinyin":"huí shōu","topic":"environment","level":"intermediate"},{"vi":"năng lượng","en":"energy","ko":"에너지","ru":"энергия","zh":"能源","pinyin":"néng yuán","topic":"environment","level":"intermediate"},{"vi":"xã hội","en":"society","ko":"사회","ru":"общество","zh":"社会","pinyin":"shè huì","topic":"society","level":"advanced"},{"vi":"văn hóa","en":"culture","ko":"문화","ru":"культура","zh":"文化","pinyin":"wén huà","topic":"society","level":"intermediate"},{"vi":"truyền thống","en":"tradition","ko":"전통","ru":"традиция","zh":"传统","pinyin":"chuán tǒng","topic":"society","level":"intermediate"},{"vi":"chính trị","en":"politics","ko":"정치","ru":"политика","zh":"政治","pinyin":"zhèng zhì","topic":"society","level":"advanced"},{"vi":"pháp luật","en":"law","ko":"법","ru":"закон","zh":"法律","pinyin":"fǎ lǜ","topic":"society","level":"advanced"},{"vi":"quyền lợi","en":"right","ko":"권리","ru":"право","zh":"权利","pinyin":"quán lì","topic":"society","level":"advanced"},{"vi":"trách nhiệm","en":"responsibility","ko":"책임","ru":"ответственность","zh":"责任","pinyin":"zé rèn","topic":"society","level":"advanced"},{"vi":"vấn đề / điểm bất cập","en":"problem / issue","ko":"문제점","ru":"проблемный момент","zh":"问题点","pinyin":"wèn tí diǎn","topic":"society","level":"advanced"},{"vi":"giải quyết","en":"solution / resolution","ko":"해결","ru":"решение","zh":"解决","pinyin":"jiě jué","topic":"society","level":"intermediate"},{"vi":"thay đổi","en":"change","ko":"변화","ru":"изменение","zh":"变化","pinyin":"biàn huà","topic":"society","level":"intermediate"},{"vi":"phát triển","en":"development","ko":"발전","ru":"развитие","zh":"发展","pinyin":"fā zhǎn","topic":"society","level":"advanced"},{"vi":"ảnh hưởng","en":"influence / effect","ko":"영향","ru":"влияние","zh":"影响","pinyin":"yǐng xiǎng","topic":"society","level":"advanced"},{"vi":"ưu điểm","en":"advantage","ko":"장점","ru":"преимущество","zh":"优点","pinyin":"yōu diǎn","topic":"exam","level":"intermediate"},{"vi":"nhược điểm","en":"disadvantage","ko":"단점","ru":"недостаток","zh":"缺点","pinyin":"quē diǎn","topic":"exam","level":"intermediate"},{"vi":"đồng ý","en":"agreement / support","ko":"찬성","ru":"согласие / поддержка","zh":"赞成","pinyin":"zàn chéng","topic":"exam","level":"intermediate"},{"vi":"phản đối","en":"opposition","ko":"반대","ru":"противодействие","zh":"反对","pinyin":"fǎn duì","topic":"exam","level":"intermediate"},{"vi":"lập luận / chủ trương","en":"argument / claim","ko":"주장","ru":"аргумент / утверждение","zh":"主张","pinyin":"zhǔ zhāng","topic":"exam","level":"advanced"},{"vi":"căn cứ / bằng chứng","en":"basis / evidence","ko":"근거","ru":"основание / доказательство","zh":"根据","pinyin":"gēn jù","topic":"exam","level":"advanced"},{"vi":"ví dụ","en":"for example","ko":"예를 들어","ru":"например","zh":"例如","pinyin":"lì rú","topic":"exam","level":"intermediate"},{"vi":"vì vậy","en":"therefore","ko":"따라서","ru":"поэтому","zh":"因此","pinyin":"yīn cǐ","topic":"exam","level":"advanced"},{"vi":"tuy nhiên","en":"however","ko":"그러나","ru":"однако","zh":"但是","pinyin":"dàn shì","topic":"exam","level":"intermediate"},{"vi":"mặt khác","en":"on the other hand","ko":"반면에","ru":"с другой стороны","zh":"另一方面","pinyin":"lìng yī fāng miàn","topic":"exam","level":"advanced"},{"vi":"đặc biệt","en":"especially","ko":"특히","ru":"особенно","zh":"特别","pinyin":"tè bié","topic":"exam","level":"intermediate"},{"vi":"nhìn chung","en":"generally","ko":"대체로","ru":"в целом","zh":"大体","pinyin":"dà tǐ","topic":"exam","level":"advanced"},{"vi":"cuối cùng","en":"eventually / in the end","ko":"결국","ru":"в итоге","zh":"最终","pinyin":"zuì zhōng","topic":"exam","level":"intermediate"},{"vi":"không chỉ... mà còn...","en":"not only but also","ko":"뿐만 아니라","ru":"не только..., но и...","zh":"不仅...而且...","pinyin":"bù jǐn...ér qiě...","topic":"exam","level":"advanced"},{"vi":"khó khăn","en":"difficulty","ko":"어려움","ru":"трудность","zh":"困难","pinyin":"kùn nán","topic":"exam","level":"intermediate"},{"vi":"khả năng","en":"possibility","ko":"가능성","ru":"возможность","zh":"可能性","pinyin":"kě néng xìng","topic":"exam","level":"advanced"},{"vi":"tính cần thiết","en":"necessity","ko":"필요성","ru":"необходимость","zh":"必要性","pinyin":"bì yào xìng","topic":"exam","level":"advanced"},{"vi":"tầm quan trọng","en":"importance","ko":"중요성","ru":"важность","zh":"重要性","pinyin":"zhòng yào xìng","topic":"exam","level":"advanced"},{"vi":"nguyên nhân","en":"cause","ko":"원인","ru":"причина","zh":"原因","pinyin":"yuán yīn","topic":"exam","level":"intermediate"},{"vi":"vui","en":"happy","ko":"기쁘다","ru":"радоваться","zh":"高兴","pinyin":"gāo xìng","topic":"emotion","level":"beginner"},{"vi":"buồn","en":"sad","ko":"슬프다","ru":"грустить","zh":"伤心","pinyin":"shāng xīn","topic":"emotion","level":"beginner"},{"vi":"hạnh phúc","en":"happy / be happy","ko":"행복하다","ru":"быть счастливым","zh":"幸福","pinyin":"xìng fú","topic":"emotion","level":"beginner"},{"vi":"lo lắng","en":"to worry","ko":"걱정하다","ru":"беспокоиться","zh":"担心","pinyin":"dān xīn","topic":"emotion","level":"beginner"},{"vi":"căng thẳng","en":"to be nervous","ko":"긴장하다","ru":"нервничать","zh":"紧张","pinyin":"jǐn zhāng","topic":"emotion","level":"intermediate"},{"vi":"ngạc nhiên","en":"to be surprised","ko":"놀라다","ru":"удивляться","zh":"惊讶","pinyin":"jīng yà","topic":"emotion","level":"beginner"},{"vi":"tức giận","en":"to get angry","ko":"화나다","ru":"сердиться","zh":"生气","pinyin":"shēng qì","topic":"emotion","level":"beginner"},{"vi":"thích","en":"to like","ko":"좋아하다","ru":"нравиться","zh":"喜欢","pinyin":"xǐ huān","topic":"emotion","level":"beginner"},{"vi":"ghét / không thích","en":"to dislike","ko":"싫어하다","ru":"не любить","zh":"不喜欢","pinyin":"bù xǐ huān","topic":"emotion","level":"beginner"},{"vi":"cần thiết","en":"to need / be necessary","ko":"필요하다","ru":"нуждаться / быть необходимым","zh":"需要","pinyin":"xū yào","topic":"daily","level":"beginner"},{"vi":"có thể","en":"to be possible","ko":"가능하다","ru":"быть возможным","zh":"可能","pinyin":"kě néng","topic":"exam","level":"intermediate"},{"vi":"không thể","en":"to be impossible","ko":"불가능하다","ru":"быть невозможным","zh":"不可能","pinyin":"bù kě néng","topic":"exam","level":"intermediate"},{"vi":"khác","en":"different","ko":"다르다","ru":"отличаться","zh":"不同","pinyin":"bù tóng","topic":"exam","level":"beginner"},{"vi":"giống","en":"similar","ko":"비슷하다","ru":"быть похожим","zh":"相似","pinyin":"xiāng sì","topic":"exam","level":"intermediate"},{"vi":"giống / có vẻ","en":"same / seem","ko":"같다","ru":"быть одинаковым","zh":"一样","pinyin":"yí yàng","topic":"exam","level":"beginner"},{"vi":"dễ","en":"easy","ko":"쉽다","ru":"лёгкий","zh":"容易","pinyin":"róng yì","topic":"study","level":"beginner"},{"vi":"khó","en":"difficult","ko":"어렵다","ru":"трудный","zh":"困难","pinyin":"kùn nán","topic":"study","level":"beginner"},{"vi":"nhanh","en":"fast","ko":"빠르다","ru":"быстрый","zh":"快","pinyin":"kuài","topic":"daily","level":"beginner"},{"vi":"chậm","en":"slow","ko":"느리다","ru":"медленный","zh":"慢","pinyin":"màn","topic":"daily","level":"beginner"},{"vi":"cao","en":"high","ko":"높다","ru":"высокий","zh":"高","pinyin":"gāo","topic":"daily","level":"beginner"},{"vi":"thấp","en":"low","ko":"낮다","ru":"низкий","zh":"低","pinyin":"dī","topic":"daily","level":"beginner"}]);


const EXPANDED_VOCABULARY = [{"vi":"xin chào","en":"hello","ko":"안녕하세요","ru":"привет","zh":"你好","pinyin":"nǐ hǎo","topic":"daily"},{"vi":"tạm biệt","en":"goodbye","ko":"안녕히 가세요","ru":"до свидания","zh":"再见","pinyin":"zài jiàn","topic":"daily"},{"vi":"làm ơn / vui lòng","en":"please","ko":"부탁합니다","ru":"пожалуйста","zh":"请","pinyin":"qǐng","topic":"daily"},{"vi":"cảm ơn","en":"thank you","ko":"감사합니다","ru":"спасибо","zh":"谢谢","pinyin":"xiè xie","topic":"daily"},{"vi":"xin lỗi","en":"sorry","ko":"미안합니다","ru":"извините","zh":"对不起","pinyin":"duì bu qǐ","topic":"daily"},{"vi":"có / vâng","en":"yes","ko":"네","ru":"да","zh":"是","pinyin":"shì","topic":"daily"},{"vi":"không","en":"no","ko":"아니요","ru":"нет","zh":"不","pinyin":"bù","topic":"daily"},{"vi":"bạn bè","en":"friend","ko":"친구","ru":"друг","zh":"朋友","pinyin":"péng you","topic":"people"},{"vi":"gia đình","en":"family","ko":"가족","ru":"семья","zh":"家人","pinyin":"jiā rén","topic":"people"},{"vi":"mẹ","en":"mother","ko":"어머니","ru":"мама","zh":"妈妈","pinyin":"mā ma","topic":"people"},{"vi":"bố / cha","en":"father","ko":"아버지","ru":"папа","zh":"爸爸","pinyin":"bà ba","topic":"people"},{"vi":"anh/em trai","en":"brother","ko":"형제","ru":"брат","zh":"兄弟","pinyin":"xiōng dì","topic":"people"},{"vi":"chị/em gái","en":"sister","ko":"자매","ru":"сестра","zh":"姐妹","pinyin":"jiě mèi","topic":"people"},{"vi":"giáo viên","en":"teacher","ko":"선생님","ru":"учитель","zh":"老师","pinyin":"lǎo shī","topic":"study"},{"vi":"học sinh / sinh viên","en":"student","ko":"학생","ru":"студент","zh":"学生","pinyin":"xué sheng","topic":"study"},{"vi":"trường học","en":"school","ko":"학교","ru":"школа","zh":"学校","pinyin":"xué xiào","topic":"study"},{"vi":"lớp học","en":"class","ko":"수업","ru":"занятие","zh":"课堂","pinyin":"kè táng","topic":"study"},{"vi":"sách","en":"book","ko":"책","ru":"книга","zh":"书","pinyin":"shū","topic":"study"},{"vi":"từ điển","en":"dictionary","ko":"사전","ru":"словарь","zh":"词典","pinyin":"cí diǎn","topic":"study"},{"vi":"câu hỏi","en":"question","ko":"질문","ru":"вопрос","zh":"问题","pinyin":"wèn tí","topic":"study"},{"vi":"câu trả lời","en":"answer","ko":"대답","ru":"ответ","zh":"答案","pinyin":"dá àn","topic":"study"},{"vi":"kỳ thi","en":"exam","ko":"시험","ru":"экзамен","zh":"考试","pinyin":"kǎo shì","topic":"study"},{"vi":"luyện tập","en":"practice","ko":"연습","ru":"практика","zh":"练习","pinyin":"liàn xí","topic":"study"},{"vi":"công việc","en":"work","ko":"일","ru":"работа","zh":"工作","pinyin":"gōng zuò","topic":"work"},{"vi":"công ty","en":"company","ko":"회사","ru":"компания","zh":"公司","pinyin":"gōng sī","topic":"work"},{"vi":"cuộc họp","en":"meeting","ko":"회의","ru":"встреча","zh":"会议","pinyin":"huì yì","topic":"work"},{"vi":"văn phòng","en":"office","ko":"사무실","ru":"офис","zh":"办公室","pinyin":"bàn gōng shì","topic":"work"},{"vi":"máy tính","en":"computer","ko":"컴퓨터","ru":"компьютер","zh":"电脑","pinyin":"diàn nǎo","topic":"technology"},{"vi":"điện thoại","en":"phone","ko":"전화","ru":"телефон","zh":"手机","pinyin":"shǒu jī","topic":"technology"},{"vi":"internet","en":"internet","ko":"인터넷","ru":"интернет","zh":"互联网","pinyin":"hù lián wǎng","topic":"technology"},{"vi":"trang web","en":"website","ko":"웹사이트","ru":"веб-сайт","zh":"网站","pinyin":"wǎng zhàn","topic":"technology"},{"vi":"mật khẩu","en":"password","ko":"비밀번호","ru":"пароль","zh":"密码","pinyin":"mì mǎ","topic":"technology"},{"vi":"tài khoản","en":"account","ko":"계정","ru":"аккаунт","zh":"账号","pinyin":"zhàng hào","topic":"technology"},{"vi":"tin nhắn","en":"message","ko":"메시지","ru":"сообщение","zh":"消息","pinyin":"xiāo xi","topic":"technology"},{"vi":"ảnh","en":"photo","ko":"사진","ru":"фотография","zh":"照片","pinyin":"zhào piàn","topic":"technology"},{"vi":"đồ ăn","en":"food","ko":"음식","ru":"еда","zh":"食物","pinyin":"shí wù","topic":"food"},{"vi":"nước","en":"water","ko":"물","ru":"вода","zh":"水","pinyin":"shuǐ","topic":"food"},{"vi":"cơm / gạo","en":"rice","ko":"밥","ru":"рис","zh":"米饭","pinyin":"mǐ fàn","topic":"food"},{"vi":"bánh mì","en":"bread","ko":"빵","ru":"хлеб","zh":"面包","pinyin":"miàn bāo","topic":"food"},{"vi":"trái cây","en":"fruit","ko":"과일","ru":"фрукты","zh":"水果","pinyin":"shuǐ guǒ","topic":"food"},{"vi":"rau củ","en":"vegetable","ko":"채소","ru":"овощи","zh":"蔬菜","pinyin":"shū cài","topic":"food"},{"vi":"cà phê","en":"coffee","ko":"커피","ru":"кофе","zh":"咖啡","pinyin":"kā fēi","topic":"food"},{"vi":"trà","en":"tea","ko":"차","ru":"чай","zh":"茶","pinyin":"chá","topic":"food"},{"vi":"nhà hàng","en":"restaurant","ko":"식당","ru":"ресторан","zh":"餐厅","pinyin":"cān tīng","topic":"food"},{"vi":"ngon","en":"delicious","ko":"맛있다","ru":"вкусный","zh":"好吃","pinyin":"hǎo chī","topic":"food"},{"vi":"ngôi nhà","en":"house","ko":"집","ru":"дом","zh":"房子","pinyin":"fáng zi","topic":"travel"},{"vi":"phòng","en":"room","ko":"방","ru":"комната","zh":"房间","pinyin":"fáng jiān","topic":"travel"},{"vi":"cửa","en":"door","ko":"문","ru":"дверь","zh":"门","pinyin":"mén","topic":"travel"},{"vi":"đường phố","en":"street","ko":"거리","ru":"улица","zh":"街道","pinyin":"jiē dào","topic":"travel"},{"vi":"nhà ga / trạm","en":"station","ko":"역","ru":"станция","zh":"车站","pinyin":"chē zhàn","topic":"travel"},{"vi":"sân bay","en":"airport","ko":"공항","ru":"аэропорт","zh":"机场","pinyin":"jī chǎng","topic":"travel"},{"vi":"khách sạn","en":"hotel","ko":"호텔","ru":"отель","zh":"酒店","pinyin":"jiǔ diàn","topic":"travel"},{"vi":"vé","en":"ticket","ko":"표","ru":"билет","zh":"票","pinyin":"piào","topic":"travel"},{"vi":"tàu hỏa","en":"train","ko":"기차","ru":"поезд","zh":"火车","pinyin":"huǒ chē","topic":"travel"},{"vi":"xe buýt","en":"bus","ko":"버스","ru":"автобус","zh":"公交车","pinyin":"gōng jiāo chē","topic":"travel"},{"vi":"hôm nay","en":"today","ko":"오늘","ru":"сегодня","zh":"今天","pinyin":"jīn tiān","topic":"time"},{"vi":"ngày mai","en":"tomorrow","ko":"내일","ru":"завтра","zh":"明天","pinyin":"míng tiān","topic":"time"},{"vi":"hôm qua","en":"yesterday","ko":"어제","ru":"вчера","zh":"昨天","pinyin":"zuó tiān","topic":"time"},{"vi":"buổi sáng","en":"morning","ko":"아침","ru":"утро","zh":"早上","pinyin":"zǎo shang","topic":"time"},{"vi":"buổi chiều","en":"afternoon","ko":"오후","ru":"день","zh":"下午","pinyin":"xià wǔ","topic":"time"},{"vi":"buổi tối","en":"evening","ko":"저녁","ru":"вечер","zh":"晚上","pinyin":"wǎn shang","topic":"time"},{"vi":"ban đêm","en":"night","ko":"밤","ru":"ночь","zh":"夜晚","pinyin":"yè wǎn","topic":"time"},{"vi":"tuần","en":"week","ko":"주","ru":"неделя","zh":"星期","pinyin":"xīng qī","topic":"time"},{"vi":"tháng","en":"month","ko":"달","ru":"месяц","zh":"月","pinyin":"yuè","topic":"time"},{"vi":"năm","en":"year","ko":"년","ru":"год","zh":"年","pinyin":"nián","topic":"time"},{"vi":"vui / hạnh phúc","en":"happy","ko":"행복하다","ru":"счастливый","zh":"快乐","pinyin":"kuài lè","topic":"emotion"},{"vi":"buồn","en":"sad","ko":"슬프다","ru":"грустный","zh":"悲伤","pinyin":"bēi shāng","topic":"emotion"},{"vi":"tức giận","en":"angry","ko":"화가 나다","ru":"злой","zh":"生气","pinyin":"shēng qì","topic":"emotion"},{"vi":"mệt mỏi","en":"tired","ko":"피곤하다","ru":"уставший","zh":"累","pinyin":"lèi","topic":"emotion"},{"vi":"phấn khích","en":"excited","ko":"신나다","ru":"взволнованный","zh":"兴奋","pinyin":"xīng fèn","topic":"emotion"},{"vi":"tình yêu / yêu","en":"love","ko":"사랑","ru":"любовь","zh":"爱","pinyin":"ài","topic":"emotion"},{"vi":"thiên nhiên","en":"nature","ko":"자연","ru":"природа","zh":"自然","pinyin":"zì rán","topic":"nature"},{"vi":"thời tiết","en":"weather","ko":"날씨","ru":"погода","zh":"天气","pinyin":"tiān qì","topic":"nature"},{"vi":"mặt trời","en":"sun","ko":"태양","ru":"солнце","zh":"太阳","pinyin":"tài yáng","topic":"nature"},{"vi":"mưa","en":"rain","ko":"비","ru":"дождь","zh":"雨","pinyin":"yǔ","topic":"nature"},{"vi":"tuyết","en":"snow","ko":"눈","ru":"снег","zh":"雪","pinyin":"xuě","topic":"nature"},{"vi":"cây","en":"tree","ko":"나무","ru":"дерево","zh":"树","pinyin":"shù","topic":"nature"},{"vi":"hoa","en":"flower","ko":"꽃","ru":"цветок","zh":"花","pinyin":"huā","topic":"nature"}];

/* Keep the original 28 core words and add the curated high-frequency set. */
vocabulary.push(...EXPANDED_VOCABULARY);


/* StudyBear curated core vocabulary expansion V10.
   Appended only: existing learner progress indexes remain stable. */
const STUDYBEAR_CORE_EXPANSION_V10 = [{"vi":"tốt / thích","en":"good / like","ko":"좋다","ru":"хороший / нравиться","zh":"好","pinyin":"hǎo","topic":"daily","level":"beginner"},{"vi":"ghét / không thích","en":"dislike / hate","ko":"싫다","ru":"не любить / ненавидеть","zh":"讨厌","pinyin":"tǎo yàn","topic":"daily","level":"beginner"},{"vi":"đúng","en":"to be correct","ko":"맞다","ru":"быть правильным","zh":"对","pinyin":"duì","topic":"communication","level":"beginner"},{"vi":"sai","en":"to be wrong","ko":"틀리다","ru":"ошибаться","zh":"错","pinyin":"cuò","topic":"communication","level":"beginner"},{"vi":"biết","en":"to know","ko":"알다","ru":"знать","zh":"知道","pinyin":"zhī dào","topic":"communication","level":"beginner"},{"vi":"không biết","en":"to not know","ko":"모르다","ru":"не знать","zh":"不知道","pinyin":"bù zhī dào","topic":"communication","level":"beginner"},{"vi":"nói","en":"to speak","ko":"말하다","ru":"говорить","zh":"说","pinyin":"shuō","topic":"communication","level":"beginner"},{"vi":"nghe","en":"to listen / hear","ko":"듣다","ru":"слушать / слышать","zh":"听","pinyin":"tīng","topic":"communication","level":"beginner"},{"vi":"đọc","en":"to read","ko":"읽다","ru":"читать","zh":"读","pinyin":"dú","topic":"study","level":"beginner"},{"vi":"hiểu","en":"to understand","ko":"이해하다","ru":"понимать","zh":"理解","pinyin":"lǐ jiě","topic":"study","level":"beginner"},{"vi":"nghĩ","en":"to think","ko":"생각하다","ru":"думать","zh":"认为 / 想","pinyin":"rèn wéi / xiǎng","topic":"exam","level":"intermediate"},{"vi":"hỏi","en":"to ask","ko":"묻다","ru":"спрашивать","zh":"问","pinyin":"wèn","topic":"communication","level":"beginner"},{"vi":"trò chuyện","en":"to have a conversation","ko":"대화하다","ru":"разговаривать","zh":"交谈","pinyin":"jiāo tán","topic":"communication","level":"intermediate"},{"vi":"giới thiệu","en":"to introduce","ko":"소개하다","ru":"представлять","zh":"介绍","pinyin":"jiè shào","topic":"communication","level":"beginner"},{"vi":"lời chào","en":"greeting","ko":"인사","ru":"приветствие","zh":"问候","pinyin":"wèn hòu","topic":"communication","level":"beginner"},{"vi":"tên","en":"name","ko":"이름","ru":"имя","zh":"名字","pinyin":"míng zi","topic":"people","level":"beginner"},{"vi":"tuổi","en":"age","ko":"나이","ru":"возраст","zh":"年龄","pinyin":"nián líng","topic":"people","level":"beginner"},{"vi":"địa chỉ","en":"address","ko":"주소","ru":"адрес","zh":"地址","pinyin":"dì zhǐ","topic":"people","level":"beginner"},{"vi":"số điện thoại","en":"phone number","ko":"전화번호","ru":"номер телефона","zh":"电话号码","pinyin":"diàn huà hào mǎ","topic":"technology","level":"beginner"},{"vi":"sinh nhật","en":"birthday","ko":"생일","ru":"день рождения","zh":"生日","pinyin":"shēng rì","topic":"people","level":"beginner"},{"vi":"đại học","en":"university","ko":"대학교","ru":"университет","zh":"大学","pinyin":"dà xué","topic":"study","level":"beginner"},{"vi":"cao học","en":"graduate school","ko":"대학원","ru":"аспирантура","zh":"研究生院","pinyin":"yán jiū shēng yuàn","topic":"study","level":"advanced"},{"vi":"chuyên ngành","en":"major","ko":"전공","ru":"специальность","zh":"专业","pinyin":"zhuān yè","topic":"study","level":"intermediate"},{"vi":"năm học / lớp","en":"school year / grade","ko":"학년","ru":"курс обучения","zh":"年级","pinyin":"nián jí","topic":"study","level":"beginner"},{"vi":"học kỳ","en":"semester","ko":"학기","ru":"семестр","zh":"学期","pinyin":"xué qī","topic":"study","level":"intermediate"},{"vi":"giáo sư","en":"professor","ko":"교수","ru":"профессор","zh":"教授","pinyin":"jiào shòu","topic":"study","level":"intermediate"},{"vi":"sinh viên / học sinh","en":"student","ko":"학생","ru":"студент","zh":"学生","pinyin":"xué sheng","topic":"study","level":"beginner"},{"vi":"phòng học","en":"classroom","ko":"교실","ru":"класс / аудитория","zh":"教室","pinyin":"jiào shì","topic":"study","level":"beginner"},{"vi":"thư viện","en":"library","ko":"도서관","ru":"библиотека","zh":"图书馆","pinyin":"tú shū guǎn","topic":"study","level":"beginner"},{"vi":"giáo trình","en":"textbook / study material","ko":"교재","ru":"учебник","zh":"教材","pinyin":"jiào cái","topic":"study","level":"intermediate"},{"vi":"từ điển","en":"dictionary","ko":"사전","ru":"словарь","zh":"词典","pinyin":"cí diǎn","topic":"study","level":"beginner"},{"vi":"ngữ pháp","en":"grammar","ko":"문법","ru":"грамматика","zh":"语法","pinyin":"yǔ fǎ","topic":"study","level":"intermediate"},{"vi":"từ vựng","en":"word / vocabulary","ko":"단어","ru":"слово","zh":"单词","pinyin":"dān cí","topic":"study","level":"beginner"},{"vi":"câu","en":"sentence","ko":"문장","ru":"предложение","zh":"句子","pinyin":"jù zi","topic":"study","level":"beginner"},{"vi":"cách diễn đạt","en":"expression","ko":"표현","ru":"выражение","zh":"表达","pinyin":"biǎo dá","topic":"study","level":"intermediate"},{"vi":"phát âm","en":"pronunciation","ko":"발음","ru":"произношение","zh":"发音","pinyin":"fā yīn","topic":"study","level":"beginner"},{"vi":"đọc","en":"reading","ko":"읽기","ru":"чтение","zh":"阅读","pinyin":"yuè dú","topic":"study","level":"beginner"},{"vi":"viết","en":"writing","ko":"쓰기","ru":"письмо","zh":"写作","pinyin":"xiě zuò","topic":"study","level":"beginner"},{"vi":"nói","en":"speaking","ko":"말하기","ru":"говорение","zh":"口语","pinyin":"kǒu yǔ","topic":"study","level":"beginner"},{"vi":"nghe","en":"listening","ko":"듣기","ru":"аудирование","zh":"听力","pinyin":"tīng lì","topic":"study","level":"beginner"},{"vi":"câu hỏi thi","en":"test question","ko":"시험 문제","ru":"экзаменационный вопрос","zh":"试题","pinyin":"shì tí","topic":"exam","level":"intermediate"},{"vi":"thi thử","en":"mock exam","ko":"모의고사","ru":"пробный экзамен","zh":"模拟考试","pinyin":"mó nǐ kǎo shì","topic":"exam","level":"intermediate"},{"vi":"đáp án đúng","en":"correct answer","ko":"정답","ru":"правильный ответ","zh":"正确答案","pinyin":"zhèng què dá àn","topic":"exam","level":"intermediate"},{"vi":"đáp án sai","en":"wrong answer","ko":"오답","ru":"неправильный ответ","zh":"错误答案","pinyin":"cuò wù dá àn","topic":"exam","level":"intermediate"},{"vi":"chấm điểm","en":"grading","ko":"채점","ru":"оценивание","zh":"评分","pinyin":"píng fēn","topic":"exam","level":"advanced"},{"vi":"đỗ / đạt","en":"to pass","ko":"합격하다","ru":"сдать / пройти","zh":"通过","pinyin":"tōng guò","topic":"exam","level":"intermediate"},{"vi":"trượt / không đạt","en":"to fail","ko":"불합격하다","ru":"не пройти","zh":"未通过","pinyin":"wèi tōng guò","topic":"exam","level":"intermediate"},{"vi":"점수","en":"score","ko":"점수","ru":"балл","zh":"分数","pinyin":"fēn shù","topic":"exam","level":"beginner"},{"vi":"cấp độ / xếp hạng","en":"grade / level","ko":"등급","ru":"уровень / оценка","zh":"等级","pinyin":"děng jí","topic":"exam","level":"intermediate"},{"vi":"đánh giá","en":"evaluation","ko":"평가","ru":"оценка","zh":"评价","pinyin":"píng jià","topic":"exam","level":"advanced"},{"vi":"nơi làm việc","en":"workplace","ko":"직장","ru":"рабочее место","zh":"职场","pinyin":"zhí chǎng","topic":"work","level":"intermediate"},{"vi":"việc làm","en":"employment","ko":"취업","ru":"трудоустройство","zh":"就业","pinyin":"jiù yè","topic":"work","level":"intermediate"},{"vi":"nghỉ việc / nghỉ hưu","en":"retirement / resignation","ko":"퇴직","ru":"увольнение / выход на пенсию","zh":"退休","pinyin":"tuì xiū","topic":"work","level":"advanced"},{"vi":"phỏng vấn","en":"interview","ko":"면접","ru":"собеседование","zh":"面试","pinyin":"miàn shì","topic":"work","level":"beginner"},{"vi":"sơ yếu lý lịch / CV","en":"resume","ko":"이력서","ru":"резюме","zh":"简历","pinyin":"jiǎn lì","topic":"work","level":"beginner"},{"vi":"bản tự giới thiệu","en":"self-introduction letter","ko":"자기소개서","ru":"мотивационное письмо","zh":"自我介绍信","pinyin":"zì wǒ jiè shào xìn","topic":"work","level":"intermediate"},{"vi":"thông báo tuyển dụng","en":"job posting","ko":"채용 공고","ru":"вакансия","zh":"招聘公告","pinyin":"zhāo pìn gōng gào","topic":"work","level":"intermediate"},{"vi":"người ứng tuyển","en":"applicant","ko":"지원자","ru":"кандидат","zh":"申请人","pinyin":"shēn qǐng rén","topic":"work","level":"intermediate"},{"vi":"tuyển dụng","en":"to recruit","ko":"채용하다","ru":"нанимать","zh":"招聘","pinyin":"zhāo pìn","topic":"work","level":"intermediate"},{"vi":"người phỏng vấn","en":"interviewer","ko":"면접관","ru":"интервьюер","zh":"面试官","pinyin":"miàn shì guān","topic":"work","level":"advanced"},{"vi":"công việc / nhiệm vụ","en":"duties / business","ko":"업무","ru":"обязанности","zh":"业务","pinyin":"yè wù","topic":"work","level":"intermediate"},{"vi":"khối lượng công việc","en":"workload","ko":"업무량","ru":"объём работы","zh":"工作量","pinyin":"gōng zuò liàng","topic":"work","level":"advanced"},{"vi":"nhân viên văn phòng","en":"office worker","ko":"회사원","ru":"офисный работник","zh":"公司职员","pinyin":"gōng sī zhí yuán","topic":"work","level":"beginner"},{"vi":"bộ phận","en":"department","ko":"부서","ru":"отдел","zh":"部门","pinyin":"bù mén","topic":"work","level":"intermediate"},{"vi":"phòng họp","en":"meeting room","ko":"회의실","ru":"переговорная","zh":"会议室","pinyin":"huì yì shì","topic":"work","level":"beginner"},{"vi":"báo cáo","en":"report","ko":"보고서","ru":"отчёт","zh":"报告","pinyin":"bào gào","topic":"work","level":"intermediate"},{"vi":"nộp","en":"to submit","ko":"제출하다","ru":"сдавать / подавать","zh":"提交","pinyin":"tí jiāo","topic":"work","level":"intermediate"},{"vi":"hạn chót","en":"deadline / closing","ko":"마감","ru":"крайний срок","zh":"截止","pinyin":"jié zhǐ","topic":"work","level":"intermediate"},{"vi":"thành quả","en":"performance / achievement","ko":"성과","ru":"результат / достижение","zh":"成果","pinyin":"chéng guǒ","topic":"work","level":"advanced"},{"vi":"목표","en":"goal","ko":"목표","ru":"цель","zh":"目标","pinyin":"mù biāo","topic":"work","level":"intermediate"},{"vi":"경제","en":"economy","ko":"경제","ru":"экономика","zh":"经济","pinyin":"jīng jì","topic":"economy","level":"advanced"},{"vi":"기업","en":"company / enterprise","ko":"기업","ru":"предприятие","zh":"企业","pinyin":"qǐ yè","topic":"economy","level":"advanced"},{"vi":"ngành công nghiệp","en":"industry","ko":"산업","ru":"промышленность","zh":"产业","pinyin":"chǎn yè","topic":"economy","level":"advanced"},{"vi":"thương mại","en":"trade","ko":"무역","ru":"торговля","zh":"贸易","pinyin":"mào yì","topic":"economy","level":"advanced"},{"vi":"xuất khẩu","en":"export","ko":"수출","ru":"экспорт","zh":"出口","pinyin":"chū kǒu","topic":"economy","level":"advanced"},{"vi":"nhập khẩu","en":"import / income","ko":"수입","ru":"импорт / доход","zh":"进口","pinyin":"jìn kǒu","topic":"economy","level":"advanced"},{"vi":"cạnh tranh","en":"competition","ko":"경쟁","ru":"конкуренция","zh":"竞争","pinyin":"jìng zhēng","topic":"economy","level":"intermediate"},{"vi":"tăng trưởng","en":"growth","ko":"성장","ru":"рост","zh":"增长","pinyin":"zēng zhǎng","topic":"economy","level":"intermediate"},{"vi":"giảm","en":"decrease","ko":"감소","ru":"снижение","zh":"减少","pinyin":"jiǎn shǎo","topic":"economy","level":"intermediate"},{"vi":"tăng","en":"increase","ko":"증가","ru":"увеличение","zh":"增加","pinyin":"zēng jiā","topic":"economy","level":"intermediate"},{"vi":"đầu tư","en":"investment","ko":"투자","ru":"инвестиции","zh":"投资","pinyin":"tóu zī","topic":"economy","level":"advanced"},{"vi":"người tiêu dùng","en":"consumer","ko":"소비자","ru":"потребитель","zh":"消费者","pinyin":"xiāo fèi zhě","topic":"economy","level":"intermediate"},{"vi":"doanh nhân","en":"entrepreneur","ko":"기업가","ru":"предприниматель","zh":"企业家","pinyin":"qǐ yè jiā","topic":"economy","level":"advanced"},{"vi":"thất nghiệp","en":"unemployment","ko":"실업","ru":"безработица","zh":"失业","pinyin":"shī yè","topic":"economy","level":"advanced"},{"vi":"giá cả / mức giá","en":"prices / cost of living","ko":"물가","ru":"цены","zh":"物价","pinyin":"wù jià","topic":"economy","level":"advanced"},{"vi":"thuế","en":"tax","ko":"세금","ru":"налог","zh":"税","pinyin":"shuì","topic":"economy","level":"intermediate"},{"vi":"ngân sách","en":"budget","ko":"예산","ru":"бюджет","zh":"预算","pinyin":"yù suàn","topic":"economy","level":"advanced"},{"vi":"소비","en":"consumption","ko":"소비","ru":"потребление","zh":"消费","pinyin":"xiāo fèi","topic":"economy","level":"intermediate"},{"vi":"nhu cầu","en":"demand","ko":"수요","ru":"спрос","zh":"需求","pinyin":"xū qiú","topic":"economy","level":"advanced"},{"vi":"nguồn cung","en":"supply","ko":"공급","ru":"предложение","zh":"供应","pinyin":"gōng yìng","topic":"economy","level":"advanced"},{"vi":"công cộng","en":"public","ko":"공공","ru":"общественный","zh":"公共","pinyin":"gōng gòng","topic":"society","level":"advanced"},{"vi":"công dân","en":"citizen","ko":"시민","ru":"гражданин","zh":"公民","pinyin":"gōng mín","topic":"society","level":"advanced"},{"vi":"chính phủ","en":"government","ko":"정부","ru":"правительство","zh":"政府","pinyin":"zhèng fǔ","topic":"society","level":"advanced"},{"vi":"quốc gia","en":"nation / state","ko":"국가","ru":"государство","zh":"国家","pinyin":"guó jiā","topic":"society","level":"intermediate"},{"vi":"chính sách","en":"policy","ko":"정책","ru":"политика / мера","zh":"政策","pinyin":"zhèng cè","topic":"society","level":"advanced"},{"vi":"chế độ / hệ thống","en":"system / institution","ko":"제도","ru":"система / институт","zh":"制度","pinyin":"zhì dù","topic":"society","level":"advanced"},{"vi":"luật pháp","en":"law / legislation","ko":"법률","ru":"законодательство","zh":"法律","pinyin":"fǎ lǜ","topic":"society","level":"advanced"},{"vi":"tòa án","en":"court","ko":"법원","ru":"суд","zh":"法院","pinyin":"fǎ yuàn","topic":"society","level":"advanced"},{"vi":"cảnh sát","en":"police","ko":"경찰","ru":"полиция","zh":"警察","pinyin":"jǐng chá","topic":"society","level":"beginner"},{"vi":"bầu cử","en":"election","ko":"선거","ru":"выборы","zh":"选举","pinyin":"xuǎn jǔ","topic":"society","level":"advanced"},{"vi":"bỏ phiếu","en":"vote / voting","ko":"투표","ru":"голосование","zh":"投票","pinyin":"tóu piào","topic":"society","level":"intermediate"},{"vi":"bình đẳng","en":"equality","ko":"평등","ru":"равенство","zh":"平等","pinyin":"píng děng","topic":"society","level":"advanced"},{"vi":"phân biệt đối xử","en":"discrimination","ko":"차별","ru":"дискриминация","zh":"歧视","pinyin":"qí shì","topic":"society","level":"advanced"},{"vi":"nhân quyền","en":"human rights","ko":"인권","ru":"права человека","zh":"人权","pinyin":"rén quán","topic":"society","level":"advanced"},{"vi":"phúc lợi","en":"welfare","ko":"복지","ru":"социальное обеспечение","zh":"福利","pinyin":"fú lì","topic":"society","level":"advanced"},{"vi":"tội phạm","en":"crime","ko":"범죄","ru":"преступление","zh":"犯罪","pinyin":"fàn zuì","topic":"society","level":"advanced"},{"vi":"an toàn","en":"safety","ko":"안전","ru":"безопасность","zh":"安全","pinyin":"ān quán","topic":"society","level":"intermediate"},{"vi":"trật tự","en":"order","ko":"질서","ru":"порядок","zh":"秩序","pinyin":"zhì xù","topic":"society","level":"advanced"},{"vi":"quy tắc","en":"rule","ko":"규칙","ru":"правило","zh":"规则","pinyin":"guī zé","topic":"society","level":"intermediate"},{"vi":"giấy phép / sự cho phép","en":"permission / permit","ko":"허가","ru":"разрешение","zh":"许可","pinyin":"xǔ kě","topic":"society","level":"advanced"},{"vi":"환경","en":"environment","ko":"환경","ru":"окружающая среда","zh":"环境","pinyin":"huán jìng","topic":"environment","level":"intermediate"},{"vi":"khí quyển / không khí","en":"air / atmosphere","ko":"대기","ru":"атмосфера","zh":"大气","pinyin":"dà qì","topic":"environment","level":"advanced"},{"vi":"chất lượng nước","en":"water quality","ko":"수질","ru":"качество воды","zh":"水质","pinyin":"shuǐ zhì","topic":"environment","level":"advanced"},{"vi":"ô nhiễm không khí","en":"air pollution","ko":"대기 오염","ru":"загрязнение воздуха","zh":"空气污染","pinyin":"kōng qì wū rǎn","topic":"environment","level":"advanced"},{"vi":"khí nhà kính","en":"greenhouse gas","ko":"온실가스","ru":"парниковый газ","zh":"温室气体","pinyin":"wēn shì qì tǐ","topic":"environment","level":"advanced"},{"vi":"nóng lên toàn cầu","en":"global warming","ko":"지구 온난화","ru":"глобальное потепление","zh":"全球变暖","pinyin":"quán qiú biàn nuǎn","topic":"environment","level":"advanced"},{"vi":"biến đổi khí hậu","en":"climate change","ko":"기후 변화","ru":"изменение климата","zh":"气候变化","pinyin":"qì hòu biàn huà","topic":"environment","level":"advanced"},{"vi":"tài nguyên","en":"resource","ko":"자원","ru":"ресурс","zh":"资源","pinyin":"zī yuán","topic":"environment","level":"advanced"},{"vi":"tài nguyên thiên nhiên","en":"natural resource","ko":"천연자원","ru":"природный ресурс","zh":"自然资源","pinyin":"zì rán zī yuán","topic":"environment","level":"advanced"},{"vi":"năng lượng tái tạo","en":"renewable energy","ko":"재생 에너지","ru":"возобновляемая энергия","zh":"可再生能源","pinyin":"kě zài shēng néng yuán","topic":"environment","level":"advanced"},{"vi":"năng lượng mặt trời","en":"solar power","ko":"태양광","ru":"солнечная энергия","zh":"太阳能","pinyin":"tài yáng néng","topic":"science","level":"advanced"},{"vi":"khoa học","en":"science","ko":"과학","ru":"наука","zh":"科学","pinyin":"kē xué","topic":"science","level":"intermediate"},{"vi":"công nghệ / kỹ thuật","en":"technology","ko":"기술","ru":"технология","zh":"技术","pinyin":"jì shù","topic":"technology","level":"intermediate"},{"vi":"thí nghiệm","en":"experiment","ko":"실험","ru":"эксперимент","zh":"实验","pinyin":"shí yàn","topic":"science","level":"intermediate"},{"vi":"quan sát","en":"observation","ko":"관찰","ru":"наблюдение","zh":"观察","pinyin":"guān chá","topic":"science","level":"intermediate"},{"vi":"dữ liệu / tài liệu","en":"data / material","ko":"자료","ru":"данные / материалы","zh":"资料","pinyin":"zī liào","topic":"science","level":"intermediate"},{"vi":"결과","en":"result","ko":"결과","ru":"результат","zh":"结果","pinyin":"jié guǒ","topic":"science","level":"intermediate"},{"vi":"원인","en":"cause","ko":"원인","ru":"причина","zh":"原因","pinyin":"yuán yīn","topic":"science","level":"intermediate"},{"vi":"phát hiện","en":"discovery","ko":"발견","ru":"открытие","zh":"发现","pinyin":"fā xiàn","topic":"science","level":"intermediate"},{"vi":"발명","en":"invention","ko":"발명","ru":"изобретение","zh":"发明","pinyin":"fā míng","topic":"science","level":"intermediate"},{"vi":"sức khỏe","en":"health","ko":"건강","ru":"здоровье","zh":"健康","pinyin":"jiàn kāng","topic":"health","level":"beginner"},{"vi":"bệnh tật","en":"disease","ko":"질병","ru":"болезнь","zh":"疾病","pinyin":"jí bìng","topic":"health","level":"advanced"},{"vi":"bệnh nhân","en":"patient","ko":"환자","ru":"пациент","zh":"患者","pinyin":"huàn zhě","topic":"health","level":"intermediate"},{"vi":"bác sĩ","en":"doctor","ko":"의사","ru":"врач","zh":"医生","pinyin":"yī shēng","topic":"health","level":"beginner"},{"vi":"y tá","en":"nurse","ko":"간호사","ru":"медсестра","zh":"护士","pinyin":"hù shi","topic":"health","level":"beginner"},{"vi":"khám chữa bệnh","en":"medical consultation","ko":"진료","ru":"медицинский приём","zh":"诊疗","pinyin":"zhěn liáo","topic":"health","level":"advanced"},{"vi":"kiểm tra / xét nghiệm","en":"examination / test","ko":"검사","ru":"обследование","zh":"检查","pinyin":"jiǎn chá","topic":"health","level":"intermediate"},{"vi":"phẫu thuật","en":"surgery","ko":"수술","ru":"операция","zh":"手术","pinyin":"shǒu shù","topic":"health","level":"advanced"},{"vi":"phòng ngừa","en":"prevention","ko":"예방","ru":"профилактика","zh":"预防","pinyin":"yù fáng","topic":"health","level":"intermediate"},{"vi":"triệu chứng","en":"symptom","ko":"증상","ru":"симптом","zh":"症状","pinyin":"zhèng zhuàng","topic":"health","level":"intermediate"},{"vi":"hồi phục","en":"recovery","ko":"회복","ru":"восстановление","zh":"恢复","pinyin":"huī fù","topic":"health","level":"intermediate"},{"vi":"điều trị","en":"to treat","ko":"치료하다","ru":"лечить","zh":"治疗","pinyin":"zhì liáo","topic":"health","level":"intermediate"},{"vi":"uống thuốc","en":"to take medicine","ko":"복용하다","ru":"принимать лекарство","zh":"服用","pinyin":"fú yòng","topic":"health","level":"advanced"},{"vi":"cơn đau","en":"pain","ko":"통증","ru":"боль","zh":"疼痛","pinyin":"téng tòng","topic":"health","level":"intermediate"},{"vi":"sốt","en":"fever","ko":"열","ru":"температура / жар","zh":"发烧","pinyin":"fā shāo","topic":"health","level":"beginner"},{"vi":"ho","en":"cough","ko":"기침","ru":"кашель","zh":"咳嗽","pinyin":"ké sòu","topic":"health","level":"beginner"},{"vi":"cảm cúm","en":"cold","ko":"감기","ru":"простуда","zh":"感冒","pinyin":"gǎn mào","topic":"health","level":"beginner"},{"vi":"bệnh","en":"illness","ko":"병","ru":"болезнь","zh":"病","pinyin":"bìng","topic":"health","level":"beginner"},{"vi":"tập thể dục","en":"exercise","ko":"운동","ru":"упражнение","zh":"运动","pinyin":"yùn dòng","topic":"health","level":"beginner"},{"vi":"thói quen ăn uống","en":"eating habits","ko":"식습관","ru":"пищевые привычки","zh":"饮食习惯","pinyin":"yǐn shí xí guàn","topic":"health","level":"intermediate"},{"vi":"ngon","en":"delicious","ko":"맛있다","ru":"вкусный","zh":"好吃","pinyin":"hǎo chī","topic":"food","level":"beginner"},{"vi":"không ngon","en":"not tasty","ko":"맛없다","ru":"невкусный","zh":"不好吃","pinyin":"bù hǎo chī","topic":"food","level":"beginner"},{"vi":"cay","en":"spicy","ko":"맵다","ru":"острый","zh":"辣","pinyin":"là","topic":"food","level":"beginner"},{"vi":"ngọt","en":"sweet","ko":"달다","ru":"сладкий","zh":"甜","pinyin":"tián","topic":"food","level":"beginner"},{"vi":"mặn","en":"salty","ko":"짜다","ru":"солёный","zh":"咸","pinyin":"xián","topic":"food","level":"beginner"},{"vi":"đắng","en":"bitter","ko":"쓰다","ru":"горький","zh":"苦","pinyin":"kǔ","topic":"food","level":"beginner"},{"vi":"chua","en":"sour","ko":"시다","ru":"кислый","zh":"酸","pinyin":"suān","topic":"food","level":"beginner"},{"vi":"ấm","en":"warm","ko":"따뜻하다","ru":"тёплый","zh":"温暖","pinyin":"wēn nuǎn","topic":"food","level":"beginner"},{"vi":"lạnh","en":"cold","ko":"차갑다","ru":"холодный","zh":"冷","pinyin":"lěng","topic":"food","level":"beginner"},{"vi":"nguyên liệu","en":"ingredient","ko":"재료","ru":"ингредиент","zh":"材料","pinyin":"cái liào","topic":"food","level":"intermediate"},{"vi":"식당","en":"restaurant","ko":"식당","ru":"ресторан","zh":"餐厅","pinyin":"cān tīng","topic":"food","level":"beginner"},{"vi":"thực đơn","en":"menu","ko":"메뉴","ru":"меню","zh":"菜单","pinyin":"cài dān","topic":"food","level":"beginner"},{"vi":"gọi món / đặt món","en":"to order","ko":"주문하다","ru":"заказывать","zh":"点餐","pinyin":"diǎn cān","topic":"food","level":"beginner"},{"vi":"thanh toán","en":"to pay / calculate","ko":"계산하다","ru":"оплачивать","zh":"结账","pinyin":"jié zhàng","topic":"shopping","level":"beginner"},{"vi":"ăn chay","en":"vegetarian diet","ko":"채식","ru":"вегетарианство","zh":"素食","pinyin":"sù shí","topic":"food","level":"intermediate"},{"vi":"thịt","en":"meat","ko":"고기","ru":"мясо","zh":"肉","pinyin":"ròu","topic":"food","level":"beginner"},{"vi":"cá","en":"fish","ko":"생선","ru":"рыба","zh":"鱼","pinyin":"yú","topic":"food","level":"beginner"},{"vi":"trái cây","en":"fruit","ko":"과일","ru":"фрукты","zh":"水果","pinyin":"shuǐ guǒ","topic":"food","level":"beginner"},{"vi":"rau củ","en":"vegetable","ko":"채소","ru":"овощи","zh":"蔬菜","pinyin":"shū cài","topic":"food","level":"beginner"},{"vi":"đồ uống","en":"beverage","ko":"음료","ru":"напиток","zh":"饮料","pinyin":"yǐn liào","topic":"food","level":"beginner"},{"vi":"hộ chiếu","en":"passport","ko":"여권","ru":"паспорт","zh":"护照","pinyin":"hù zhào","topic":"travel","level":"beginner"},{"vi":"thị thực","en":"visa","ko":"비자","ru":"виза","zh":"签证","pinyin":"qiān zhèng","topic":"travel","level":"intermediate"},{"vi":"du khách","en":"traveler","ko":"여행자","ru":"путешественник","zh":"旅行者","pinyin":"lǚ xíng zhě","topic":"travel","level":"intermediate"},{"vi":"du lịch / tham quan","en":"tourism / sightseeing","ko":"관광","ru":"туризм","zh":"观光","pinyin":"guān guāng","topic":"travel","level":"intermediate"},{"vi":"điểm du lịch","en":"tourist attraction","ko":"관광지","ru":"достопримечательность","zh":"旅游景点","pinyin":"lǚ yóu jǐng diǎn","topic":"travel","level":"beginner"},{"vi":"chỗ ở","en":"accommodation","ko":"숙소","ru":"жильё / размещение","zh":"住宿","pinyin":"zhù sù","topic":"travel","level":"beginner"},{"vi":"đặt chỗ","en":"to reserve","ko":"예약하다","ru":"бронировать","zh":"预订","pinyin":"yù dìng","topic":"travel","level":"intermediate"},{"vi":"nhận phòng / check-in","en":"check-in","ko":"체크인","ru":"регистрация","zh":"办理入住","pinyin":"bàn lǐ rù zhù","topic":"travel","level":"intermediate"},{"vi":"trả phòng / check-out","en":"check-out","ko":"체크아웃","ru":"выписка","zh":"退房","pinyin":"tuì fáng","topic":"travel","level":"intermediate"},{"vi":"hành lý","en":"luggage","ko":"짐","ru":"багаж","zh":"行李","pinyin":"xíng lǐ","topic":"travel","level":"beginner"},{"vi":"túi / cặp","en":"bag","ko":"가방","ru":"сумка","zh":"包","pinyin":"bāo","topic":"travel","level":"beginner"},{"vi":"kế hoạch du lịch","en":"travel plan","ko":"여행 계획","ru":"план поездки","zh":"旅行计划","pinyin":"lǚ xíng jì huà","topic":"travel","level":"beginner"},{"vi":"phương hướng","en":"direction","ko":"방향","ru":"направление","zh":"方向","pinyin":"fāng xiàng","topic":"travel","level":"intermediate"},{"vi":"bên phải","en":"right","ko":"오른쪽","ru":"справа","zh":"右边","pinyin":"yòu biān","topic":"travel","level":"beginner"},{"vi":"bên trái","en":"left","ko":"왼쪽","ru":"слева","zh":"左边","pinyin":"zuǒ biān","topic":"travel","level":"beginner"},{"vi":"đi thẳng","en":"straight ahead","ko":"직진","ru":"прямо","zh":"直走","pinyin":"zhí zǒu","topic":"travel","level":"beginner"},{"vi":"băng qua","en":"to cross","ko":"건너다","ru":"переходить","zh":"通过","pinyin":"tōng guò","topic":"travel","level":"beginner"},{"vi":"đèn giao thông","en":"traffic light","ko":"신호등","ru":"светофор","zh":"红绿灯","pinyin":"hóng lǜ dēng","topic":"travel","level":"beginner"},{"vi":"trạm / bến","en":"stop / station","ko":"정류장","ru":"остановка","zh":"车站","pinyin":"chē zhàn","topic":"travel","level":"beginner"},{"vi":"taxi","en":"taxi","ko":"택시","ru":"такси","zh":"出租车","pinyin":"chū zū chē","topic":"travel","level":"beginner"},{"vi":"nhà bếp","en":"kitchen","ko":"주방","ru":"кухня","zh":"厨房","pinyin":"chú fáng","topic":"home","level":"beginner"},{"vi":"phòng khách","en":"living room","ko":"거실","ru":"гостиная","zh":"客厅","pinyin":"kè tīng","topic":"home","level":"beginner"},{"vi":"phòng tắm","en":"bathroom","ko":"욕실","ru":"ванная","zh":"浴室","pinyin":"yù shì","topic":"home","level":"beginner"},{"vi":"ban công","en":"veranda / balcony","ko":"베란다","ru":"балкон","zh":"阳台","pinyin":"yáng tái","topic":"home","level":"beginner"},{"vi":"tủ lạnh","en":"refrigerator","ko":"냉장고","ru":"холодильник","zh":"冰箱","pinyin":"bīng xiāng","topic":"home","level":"beginner"},{"vi":"máy giặt","en":"washing machine","ko":"세탁기","ru":"стиральная машина","zh":"洗衣机","pinyin":"xǐ yī jī","topic":"home","level":"beginner"},{"vi":"lò vi sóng","en":"microwave","ko":"전자레인지","ru":"микроволновка","zh":"微波炉","pinyin":"wéi bō lú","topic":"home","level":"beginner"},{"vi":"máy hút bụi","en":"vacuum cleaner","ko":"청소기","ru":"пылесос","zh":"吸尘器","pinyin":"xī chén qì","topic":"home","level":"beginner"},{"vi":"điện","en":"electricity","ko":"전기","ru":"электричество","zh":"电","pinyin":"diàn","topic":"home","level":"beginner"},{"vi":"ga","en":"gas","ko":"가스","ru":"газ","zh":"煤气","pinyin":"méi qì","topic":"home","level":"beginner"},{"vi":"물건","en":"item / thing","ko":"물건","ru":"вещь","zh":"东西","pinyin":"dōng xi","topic":"home","level":"beginner"},{"vi":"chìa khóa","en":"key","ko":"열쇠","ru":"ключ","zh":"钥匙","pinyin":"yào shi","topic":"home","level":"beginner"},{"vi":"tường","en":"wall","ko":"벽","ru":"стена","zh":"墙","pinyin":"qiáng","topic":"home","level":"beginner"},{"vi":"sàn nhà","en":"floor","ko":"바닥","ru":"пол","zh":"地板","pinyin":"dì bǎn","topic":"home","level":"beginner"},{"vi":"trần nhà","en":"ceiling","ko":"천장","ru":"потолок","zh":"天花板","pinyin":"tiān huā bǎn","topic":"home","level":"beginner"},{"vi":"rèm cửa","en":"curtain","ko":"커튼","ru":"штора","zh":"窗帘","pinyin":"chuāng lián","topic":"home","level":"beginner"},{"vi":"đèn / lửa","en":"light / fire","ko":"불","ru":"свет / огонь","zh":"灯 / 火","pinyin":"dēng / huǒ","topic":"home","level":"beginner"},{"vi":"bật","en":"turn on","ko":"켜다","ru":"включать","zh":"打开","pinyin":"dǎ kāi","topic":"home","level":"beginner"},{"vi":"tắt","en":"turn off","ko":"끄다","ru":"выключать","zh":"关","pinyin":"guān","topic":"home","level":"beginner"},{"vi":"hỏng hóc","en":"breakdown","ko":"고장","ru":"поломка","zh":"故障","pinyin":"gù zhàng","topic":"home","level":"intermediate"},{"vi":"아침","en":"morning","ko":"아침","ru":"утро","zh":"早上","pinyin":"zǎo shang","topic":"time","level":"beginner"},{"vi":"점심","en":"lunch","ko":"점심","ru":"обед","zh":"午饭","pinyin":"wǔ fàn","topic":"time","level":"beginner"},{"vi":"저녁","en":"evening / dinner","ko":"저녁","ru":"вечер / ужин","zh":"晚上 / 晚饭","pinyin":"wǎn shang / wǎn fàn","topic":"time","level":"beginner"},{"vi":"rạng sáng","en":"dawn","ko":"새벽","ru":"рассвет","zh":"凌晨","pinyin":"líng chén","topic":"time","level":"intermediate"},{"vi":"ban ngày","en":"daytime","ko":"낮","ru":"дневное время","zh":"白天","pinyin":"bái tiān","topic":"time","level":"beginner"},{"vi":"밤","en":"night","ko":"밤","ru":"ночь","zh":"夜晚","pinyin":"yè wǎn","topic":"time","level":"beginner"},{"vi":"thời khóa biểu","en":"timetable","ko":"시간표","ru":"расписание","zh":"时间表","pinyin":"shí jiān biǎo","topic":"time","level":"beginner"},{"vi":"lịch trình","en":"schedule","ko":"일정","ru":"расписание","zh":"日程","pinyin":"rì chéng","topic":"time","level":"intermediate"},{"vi":"thời gian / khoảng thời gian","en":"period","ko":"기간","ru":"период","zh":"期间","pinyin":"qī jiān","topic":"time","level":"intermediate"},{"vi":"khoảnh khắc","en":"moment","ko":"순간","ru":"момент","zh":"瞬间","pinyin":"shùn jiān","topic":"time","level":"advanced"},{"vi":"lâu","en":"for a long time","ko":"오래","ru":"долго","zh":"很久","pinyin":"hěn jiǔ","topic":"time","level":"beginner"},{"vi":"sắp / sớm","en":"soon","ko":"곧","ru":"скоро","zh":"马上","pinyin":"mǎ shàng","topic":"time","level":"beginner"},{"vi":"đã","en":"already","ko":"벌써","ru":"уже","zh":"已经","pinyin":"yǐ jīng","topic":"time","level":"beginner"},{"vi":"vẫn / chưa","en":"still / yet","ko":"아직","ru":"ещё","zh":"还","pinyin":"hái","topic":"time","level":"beginner"},{"vi":"vừa mới","en":"just now","ko":"방금","ru":"только что","zh":"刚才","pinyin":"gāng cái","topic":"time","level":"beginner"},{"vi":"trước tiên","en":"first","ko":"먼저","ru":"сначала","zh":"先","pinyin":"xiān","topic":"time","level":"beginner"},{"vi":"sau này","en":"later","ko":"나중에","ru":"потом","zh":"以后","pinyin":"yǐ hòu","topic":"time","level":"beginner"},{"vi":"동안","en":"during / for","ko":"동안","ru":"в течение","zh":"期间","pinyin":"qī jiān","topic":"time","level":"intermediate"},{"vi":"trước","en":"before","ko":"전","ru":"до","zh":"以前","pinyin":"yǐ qián","topic":"time","level":"beginner"},{"vi":"sau","en":"after","ko":"후","ru":"после","zh":"以后","pinyin":"yǐ hòu","topic":"time","level":"beginner"},{"vi":"tâm trạng","en":"mood / feeling","ko":"기분","ru":"настроение","zh":"心情","pinyin":"xīn qíng","topic":"emotion","level":"beginner"},{"vi":"cảm xúc","en":"emotion","ko":"감정","ru":"эмоция","zh":"感情","pinyin":"gǎn qíng","topic":"emotion","level":"intermediate"},{"vi":"기쁘다","en":"to be glad","ko":"기쁘다","ru":"радоваться","zh":"高兴","pinyin":"gāo xìng","topic":"emotion","level":"beginner"},{"vi":"슬프다","en":"to be sad","ko":"슬프다","ru":"грустить","zh":"伤心","pinyin":"shāng xīn","topic":"emotion","level":"beginner"},{"vi":"행복하다","en":"to be happy","ko":"행복하다","ru":"быть счастливым","zh":"幸福","pinyin":"xìng fú","topic":"emotion","level":"beginner"},{"vi":"lo âu","en":"to be anxious","ko":"불안하다","ru":"тревожиться","zh":"不安","pinyin":"bù ān","topic":"emotion","level":"intermediate"},{"vi":"thoải mái","en":"comfortable","ko":"편안하다","ru":"комфортный","zh":"舒适","pinyin":"shū shì","topic":"emotion","level":"intermediate"},{"vi":"hài lòng","en":"to be satisfied","ko":"만족하다","ru":"быть довольным","zh":"满意","pinyin":"mǎn yì","topic":"emotion","level":"intermediate"},{"vi":"thất vọng","en":"to be disappointed","ko":"실망하다","ru":"разочаровываться","zh":"失望","pinyin":"shī wàng","topic":"emotion","level":"intermediate"},{"vi":"tự hào","en":"proud","ko":"자랑스럽다","ru":"гордый","zh":"自豪","pinyin":"zì háo","topic":"emotion","level":"advanced"},{"vi":"xấu hổ / ngại","en":"embarrassed / shy","ko":"부끄럽다","ru":"стыдно / стесняться","zh":"害羞","pinyin":"hài xiū","topic":"emotion","level":"intermediate"},{"vi":"tử tế","en":"kind","ko":"친절하다","ru":"добрый","zh":"亲切","pinyin":"qīn qiè","topic":"people","level":"beginner"},{"vi":"trung thực","en":"honest","ko":"정직하다","ru":"честный","zh":"诚实","pinyin":"chéng shí","topic":"people","level":"intermediate"},{"vi":"chăm chỉ","en":"diligent / sincere","ko":"성실하다","ru":"добросовестный","zh":"认真","pinyin":"rèn zhēn","topic":"people","level":"intermediate"},{"vi":"lười biếng","en":"lazy","ko":"게으르다","ru":"ленивый","zh":"懒惰","pinyin":"lǎn duò","topic":"people","level":"beginner"},{"vi":"yên tĩnh","en":"quiet","ko":"조용하다","ru":"тихий","zh":"安静","pinyin":"ān jìng","topic":"people","level":"beginner"},{"vi":"ồn ào","en":"noisy","ko":"시끄럽다","ru":"шумный","zh":"吵闹","pinyin":"chǎo nào","topic":"people","level":"beginner"},{"vi":"nổi tiếng","en":"famous","ko":"유명하다","ru":"известный","zh":"有名","pinyin":"yǒu míng","topic":"people","level":"beginner"},{"vi":"đặc biệt","en":"special","ko":"특별하다","ru":"особенный","zh":"特别","pinyin":"tè bié","topic":"people","level":"intermediate"},{"vi":"bình thường","en":"ordinary","ko":"평범하다","ru":"обычный","zh":"普通","pinyin":"pǔ tōng","topic":"people","level":"intermediate"},{"vi":"nhưng","en":"but / however","ko":"하지만","ru":"но / однако","zh":"但是","pinyin":"dàn shì","topic":"exam","level":"beginner"},{"vi":"vì vậy","en":"so / therefore","ko":"그래서","ru":"поэтому","zh":"所以","pinyin":"suǒ yǐ","topic":"exam","level":"beginner"},{"vi":"và","en":"and","ko":"그리고","ru":"и","zh":"而且 / 然后","pinyin":"ér qiě / rán hòu","topic":"exam","level":"beginner"},{"vi":"ngoài ra","en":"also / furthermore","ko":"또한","ru":"также","zh":"此外","pinyin":"cǐ wài","topic":"exam","level":"intermediate"},{"vi":"특히","en":"especially","ko":"특히","ru":"особенно","zh":"特别","pinyin":"tè bié","topic":"exam","level":"intermediate"},{"vi":"ví dụ như","en":"for example","ko":"예를 들면","ru":"например","zh":"比如","pinyin":"bǐ rú","topic":"exam","level":"intermediate"},{"vi":"ngược lại","en":"conversely","ko":"반대로","ru":"наоборот","zh":"相反","pinyin":"xiāng fǎn","topic":"exam","level":"advanced"},{"vi":"tóm lại","en":"in conclusion","ko":"결론적으로","ru":"в заключение","zh":"总之","pinyin":"zǒng zhī","topic":"exam","level":"advanced"},{"vi":"tức là","en":"that is / in other words","ko":"즉","ru":"то есть","zh":"即","pinyin":"jí","topic":"exam","level":"advanced"},{"vi":"따라서","en":"therefore","ko":"따라서","ru":"следовательно","zh":"因此","pinyin":"yīn cǐ","topic":"exam","level":"advanced"},{"vi":"때문에","en":"because of","ko":"때문에","ru":"из-за","zh":"因为","pinyin":"yīn wèi","topic":"exam","level":"intermediate"},{"vi":"반면","en":"whereas / on the other hand","ko":"반면","ru":"тогда как","zh":"而","pinyin":"ér","topic":"exam","level":"advanced"},{"vi":"trên hết","en":"above all","ko":"무엇보다","ru":"прежде всего","zh":"最重要的是","pinyin":"zuì zhòng yào de shì","topic":"exam","level":"advanced"},{"vi":"nhìn chung","en":"generally","ko":"일반적으로","ru":"как правило","zh":"一般来说","pinyin":"yì bān lái shuō","topic":"exam","level":"advanced"},{"vi":"phần lớn","en":"most / majority","ko":"대부분","ru":"большинство","zh":"大部分","pinyin":"dà bù fèn","topic":"exam","level":"intermediate"},{"vi":"một phần","en":"some / a portion","ko":"일부","ru":"часть","zh":"一部分","pinyin":"yī bù fèn","topic":"exam","level":"intermediate"},{"vi":"dự đoán","en":"to expect / predict","ko":"예상하다","ru":"ожидать / прогнозировать","zh":"预计","pinyin":"yù jì","topic":"exam","level":"advanced"},{"vi":"so sánh","en":"to compare","ko":"비교하다","ru":"сравнивать","zh":"比较","pinyin":"bǐ jiào","topic":"exam","level":"intermediate"},{"vi":"phân tích","en":"to analyze","ko":"분석하다","ru":"анализировать","zh":"分析","pinyin":"fēn xī","topic":"exam","level":"advanced"},{"vi":"lập luận / khẳng định","en":"to argue / claim","ko":"주장하다","ru":"утверждать","zh":"主张","pinyin":"zhǔ zhāng","topic":"exam","level":"advanced"},{"vi":"internet","en":"internet","ko":"인터넷","ru":"интернет","zh":"互联网","pinyin":"hù lián wǎng","topic":"technology","level":"beginner"},{"vi":"máy tính","en":"computer","ko":"컴퓨터","ru":"компьютер","zh":"电脑","pinyin":"diàn nǎo","topic":"technology","level":"beginner"},{"vi":"điện thoại di động","en":"mobile phone","ko":"휴대폰","ru":"мобильный телефон","zh":"手机","pinyin":"shǒu jī","topic":"technology","level":"beginner"},{"vi":"điện thoại thông minh","en":"smartphone","ko":"스마트폰","ru":"смартфон","zh":"智能手机","pinyin":"zhì néng shǒu jī","topic":"technology","level":"beginner"},{"vi":"màn hình","en":"screen","ko":"화면","ru":"экран","zh":"屏幕","pinyin":"píng mù","topic":"technology","level":"beginner"},{"vi":"tệp","en":"file","ko":"파일","ru":"файл","zh":"文件","pinyin":"wén jiàn","topic":"technology","level":"beginner"},{"vi":"tài liệu","en":"document","ko":"문서","ru":"документ","zh":"文档","pinyin":"wén dàng","topic":"technology","level":"beginner"},{"vi":"chương trình","en":"program","ko":"프로그램","ru":"программа","zh":"程序","pinyin":"chéng xù","topic":"technology","level":"intermediate"},{"vi":"ứng dụng","en":"app","ko":"앱","ru":"приложение","zh":"应用","pinyin":"yìng yòng","topic":"technology","level":"beginner"},{"vi":"ảnh","en":"photo","ko":"사진","ru":"фотография","zh":"照片","pinyin":"zhào piàn","topic":"technology","level":"beginner"},{"vi":"video","en":"video","ko":"영상","ru":"видео","zh":"视频","pinyin":"shì pín","topic":"media","level":"beginner"},{"vi":"tin tức","en":"news","ko":"뉴스","ru":"новости","zh":"新闻","pinyin":"xīn wén","topic":"media","level":"beginner"},{"vi":"báo","en":"newspaper","ko":"신문","ru":"газета","zh":"报纸","pinyin":"bào zhǐ","topic":"media","level":"beginner"},{"vi":"phát sóng","en":"broadcast","ko":"방송","ru":"вещание","zh":"广播","pinyin":"guǎng bō","topic":"media","level":"intermediate"},{"vi":"phỏng vấn","en":"interview","ko":"인터뷰","ru":"интервью","zh":"采访","pinyin":"cǎi fǎng","topic":"media","level":"intermediate"},{"vi":"quảng cáo","en":"advertisement","ko":"광고","ru":"реклама","zh":"广告","pinyin":"guǎng gào","topic":"media","level":"beginner"},{"vi":"phim","en":"movie","ko":"영화","ru":"фильм","zh":"电影","pinyin":"diàn yǐng","topic":"media","level":"beginner"},{"vi":"phim truyền hình","en":"drama / series","ko":"드라마","ru":"сериал","zh":"电视剧","pinyin":"diàn shì jù","topic":"media","level":"beginner"},{"vi":"âm nhạc","en":"music","ko":"음악","ru":"музыка","zh":"音乐","pinyin":"yīn yuè","topic":"media","level":"beginner"},{"vi":"trò chơi","en":"game","ko":"게임","ru":"игра","zh":"游戏","pinyin":"yóu xì","topic":"media","level":"beginner"},{"vi":"nội dung","en":"content","ko":"콘텐츠","ru":"контент","zh":"内容","pinyin":"nèi róng","topic":"media","level":"intermediate"},{"vi":"mua sắm","en":"shopping","ko":"쇼핑","ru":"шопинг","zh":"购物","pinyin":"gòu wù","topic":"shopping","level":"beginner"},{"vi":"가격","en":"price","ko":"가격","ru":"цена","zh":"价格","pinyin":"jià gé","topic":"shopping","level":"beginner"},{"vi":"비용","en":"cost","ko":"비용","ru":"стоимость","zh":"费用","pinyin":"fèi yòng","topic":"shopping","level":"intermediate"},{"vi":"tiền mặt","en":"cash","ko":"현금","ru":"наличные","zh":"现金","pinyin":"xiàn jīn","topic":"shopping","level":"beginner"},{"vi":"thẻ","en":"card","ko":"카드","ru":"карта","zh":"卡","pinyin":"kǎ","topic":"shopping","level":"beginner"},{"vi":"hóa đơn","en":"receipt","ko":"영수증","ru":"чек","zh":"收据","pinyin":"shōu jù","topic":"shopping","level":"beginner"},{"vi":"할인","en":"discount","ko":"할인","ru":"скидка","zh":"折扣","pinyin":"zhé kòu","topic":"shopping","level":"beginner"},{"vi":"đợt giảm giá","en":"sale","ko":"세일","ru":"распродажа","zh":"促销","pinyin":"cù xiāo","topic":"shopping","level":"beginner"},{"vi":"đổi hàng","en":"to exchange","ko":"교환하다","ru":"обменивать","zh":"交换","pinyin":"jiāo huàn","topic":"shopping","level":"intermediate"},{"vi":"hoàn tiền","en":"to refund","ko":"환불하다","ru":"возвращать деньги","zh":"退款","pinyin":"tuì kuǎn","topic":"shopping","level":"intermediate"},{"vi":"thanh toán","en":"payment","ko":"결제","ru":"оплата","zh":"支付","pinyin":"zhī fù","topic":"shopping","level":"intermediate"},{"vi":"thanh toán","en":"to pay","ko":"결제하다","ru":"оплатить","zh":"付款","pinyin":"fù kuǎn","topic":"shopping","level":"beginner"},{"vi":"giao hàng","en":"delivery","ko":"배달","ru":"доставка","zh":"配送","pinyin":"pèi sòng","topic":"shopping","level":"beginner"},{"vi":"chuyển phát","en":"parcel delivery","ko":"택배","ru":"курьерская доставка","zh":"快递","pinyin":"kuài dì","topic":"shopping","level":"beginner"},{"vi":"trực tuyến","en":"online","ko":"온라인","ru":"онлайн","zh":"在线","pinyin":"zài xiàn","topic":"shopping","level":"beginner"},{"vi":"ngoại tuyến","en":"offline","ko":"오프라인","ru":"офлайн","zh":"线下","pinyin":"xiàn xià","topic":"shopping","level":"intermediate"},{"vi":"chọn","en":"to choose","ko":"고르다","ru":"выбирать","zh":"选择","pinyin":"xuǎn zé","topic":"shopping","level":"beginner"},{"vi":"chất lượng","en":"quality","ko":"품질","ru":"качество","zh":"质量","pinyin":"zhì liàng","topic":"shopping","level":"intermediate"},{"vi":"상품","en":"product / goods","ko":"상품","ru":"товар","zh":"商品","pinyin":"shāng pǐn","topic":"shopping","level":"intermediate"},{"vi":"thương hiệu","en":"brand","ko":"브랜드","ru":"бренд","zh":"品牌","pinyin":"pǐn pái","topic":"shopping","level":"beginner"},{"vi":"구조","en":"structure","ko":"구조","ru":"структура","zh":"结构","pinyin":"jié gòu","topic":"mechanism","level":"intermediate"},{"vi":"원리","en":"principle","ko":"원리","ru":"принцип","zh":"原理","pinyin":"yuán lǐ","topic":"mechanism","level":"intermediate"},{"vi":"기능","en":"function","ko":"기능","ru":"функция","zh":"功能","pinyin":"gōng néng","topic":"mechanism","level":"intermediate"},{"vi":"과정","en":"process","ko":"과정","ru":"процесс","zh":"过程","pinyin":"guò chéng","topic":"mechanism","level":"intermediate"},{"vi":"giai đoạn / bước","en":"stage / step","ko":"단계","ru":"этап","zh":"阶段","pinyin":"jiē duàn","topic":"mechanism","level":"intermediate"},{"vi":"부분","en":"part / portion","ko":"부분","ru":"часть","zh":"部分","pinyin":"bù fèn","topic":"mechanism","level":"beginner"},{"vi":"부품","en":"component / part","ko":"부품","ru":"деталь","zh":"部件","pinyin":"bù jiàn","topic":"mechanism","level":"intermediate"},{"vi":"표면","en":"surface","ko":"표면","ru":"поверхность","zh":"表面","pinyin":"biǎo miàn","topic":"mechanism","level":"intermediate"},{"vi":"bên trong","en":"inside / interior","ko":"내부","ru":"внутренняя часть","zh":"内部","pinyin":"nèi bù","topic":"mechanism","level":"advanced"},{"vi":"bên ngoài","en":"outside / exterior","ko":"외부","ru":"внешняя часть","zh":"外部","pinyin":"wài bù","topic":"mechanism","level":"advanced"},{"vi":"áp suất","en":"pressure","ko":"압력","ru":"давление","zh":"压力","pinyin":"yā lì","topic":"science","level":"advanced"},{"vi":"nhiệt độ","en":"temperature","ko":"온도","ru":"температура","zh":"温度","pinyin":"wēn dù","topic":"science","level":"intermediate"},{"vi":"tốc độ","en":"speed","ko":"속도","ru":"скорость","zh":"速度","pinyin":"sù dù","topic":"science","level":"intermediate"},{"vi":"lực / sức mạnh","en":"force / strength","ko":"힘","ru":"сила","zh":"力量","pinyin":"lì liàng","topic":"science","level":"beginner"},{"vi":"trọng lượng","en":"weight","ko":"무게","ru":"вес","zh":"重量","pinyin":"zhòng liàng","topic":"science","level":"beginner"},{"vi":"kích thước","en":"size","ko":"크기","ru":"размер","zh":"大小","pinyin":"dà xiǎo","topic":"science","level":"beginner"},{"vi":"hình dạng","en":"shape","ko":"모양","ru":"форма","zh":"形状","pinyin":"xíng zhuàng","topic":"science","level":"beginner"},{"vi":"nguyên liệu","en":"material","ko":"재료","ru":"материал","zh":"材料","pinyin":"cái liào","topic":"science","level":"intermediate"},{"vi":"sự vận hành","en":"operation","ko":"작동","ru":"работа / функционирование","zh":"运行","pinyin":"yùn xíng","topic":"mechanism","level":"intermediate"},{"vi":"vận hành","en":"to operate","ko":"작동하다","ru":"работать","zh":"运作","pinyin":"yùn zuò","topic":"mechanism","level":"intermediate"}];
vocabulary.push(...STUDYBEAR_CORE_EXPANSION_V10);

function repairVietnameseGlosses() {
  const VI_GLOSS = {"account": "tài khoản", "afternoon": "buổi chiều", "airport": "sân bay", "angry": "tức giận", "answer": "câu trả lời", "book": "sách", "bread": "bánh mì", "brother": "anh/em trai", "bus": "xe buýt", "class": "lớp học", "coffee": "cà phê", "company": "công ty", "computer": "máy tính", "delicious": "ngon", "dictionary": "từ điển", "door": "cửa", "evening": "buổi tối", "exam": "kỳ thi", "excited": "phấn khích", "family": "gia đình", "father": "bố / cha", "flower": "hoa", "food": "đồ ăn", "friend": "bạn bè", "fruit": "trái cây", "goodbye": "tạm biệt", "happy": "vui / hạnh phúc", "hello": "xin chào", "hotel": "khách sạn", "house": "ngôi nhà", "internet": "internet", "love": "tình yêu / yêu", "meeting": "cuộc họp", "message": "tin nhắn", "month": "tháng", "morning": "buổi sáng", "mother": "mẹ", "nature": "thiên nhiên", "night": "ban đêm", "no": "không", "office": "văn phòng", "password": "mật khẩu", "phone": "điện thoại", "photo": "ảnh", "please": "làm ơn / vui lòng", "practice": "luyện tập", "question": "câu hỏi", "rain": "mưa", "restaurant": "nhà hàng", "rice": "cơm / gạo", "room": "phòng", "sad": "buồn", "school": "trường học", "sister": "chị/em gái", "snow": "tuyết", "sorry": "xin lỗi", "station": "nhà ga / trạm", "street": "đường phố", "student": "học sinh / sinh viên", "sun": "mặt trời", "taxi": "taxi", "tea": "trà", "teacher": "giáo viên", "thank you": "cảm ơn", "ticket": "vé", "tired": "mệt mỏi", "today": "hôm nay", "tomorrow": "ngày mai", "train": "tàu hỏa", "tree": "cây", "vegetable": "rau củ", "video": "video", "water": "nước", "weather": "thời tiết", "website": "trang web", "week": "tuần", "work": "công việc", "year": "năm", "yes": "có / vâng", "yesterday": "hôm qua"};
  for (const item of vocabulary) {
    if (!item || typeof item !== "object") continue;
    if (VI_GLOSS[item.en]) item.vi = VI_GLOSS[item.en];
    if (typeof item.vi === "string" && typeof item.en === "string" &&
        item.vi.trim().toLowerCase() === item.en.trim().toLowerCase() &&
        VI_GLOSS[item.en]) {
      item.vi = VI_GLOSS[item.en];
    }
  }
}



function repairVietnameseGlosses() {
  const VI_GLOSS = {"account": "tài khoản", "afternoon": "buổi chiều", "airport": "sân bay", "angry": "tức giận", "answer": "câu trả lời", "book": "sách", "bread": "bánh mì", "brother": "anh/em trai", "bus": "xe buýt", "class": "lớp học", "coffee": "cà phê", "company": "công ty", "computer": "máy tính", "delicious": "ngon", "dictionary": "từ điển", "door": "cửa", "evening": "buổi tối", "exam": "kỳ thi", "excited": "phấn khích", "family": "gia đình", "father": "bố / cha", "flower": "hoa", "food": "đồ ăn", "friend": "bạn bè", "fruit": "trái cây", "goodbye": "tạm biệt", "happy": "vui / hạnh phúc", "hello": "xin chào", "hotel": "khách sạn", "house": "ngôi nhà", "internet": "internet", "love": "tình yêu / yêu", "meeting": "cuộc họp", "message": "tin nhắn", "month": "tháng", "morning": "buổi sáng", "mother": "mẹ", "nature": "thiên nhiên", "night": "ban đêm", "no": "không", "office": "văn phòng", "password": "mật khẩu", "phone": "điện thoại", "photo": "ảnh", "please": "làm ơn / vui lòng", "practice": "luyện tập", "question": "câu hỏi", "rain": "mưa", "restaurant": "nhà hàng", "rice": "cơm / gạo", "room": "phòng", "sad": "buồn", "school": "trường học", "sister": "chị/em gái", "snow": "tuyết", "sorry": "xin lỗi", "station": "nhà ga / trạm", "street": "đường phố", "student": "học sinh / sinh viên", "sun": "mặt trời", "taxi": "taxi", "tea": "trà", "teacher": "giáo viên", "thank you": "cảm ơn", "ticket": "vé", "tired": "mệt mỏi", "today": "hôm nay", "tomorrow": "ngày mai", "train": "tàu hỏa", "tree": "cây", "vegetable": "rau củ", "video": "video", "water": "nước", "weather": "thời tiết", "website": "trang web", "week": "tuần", "work": "công việc", "year": "năm", "yes": "có / vâng", "yesterday": "hôm qua"};
  for (const item of vocabulary) {
    if (!item || typeof item !== "object") continue;
    const en = typeof item.en === "string" ? item.en.trim().toLowerCase() : "";
    if (en && VI_GLOSS[en]) item.vi = VI_GLOSS[en];
  }
}

repairVietnameseGlosses();

const LANG = {
  vi: { label:"🇻🇳 Tiếng Việt", short:"Việt", speech:"vi-VN" },
  en: { label:"🇬🇧 English", short:"English", speech:"en-US" },
  ko: { label:"🇰🇷 한국어", short:"한국어", speech:"ko-KR" },
  ru: { label:"🇷🇺 Русский", short:"Русский", speech:"ru-RU" },
  zh: { label:"🇨🇳 中文", short:"中文", speech:"zh-CN" }
};

const UI = {
  vi: {
    brandTagline:"Học vui mỗi ngày", navHome:"Trang chủ", navVocabulary:"Từ vựng", navLearned:"Từ đã học", navFlashcard:"Flashcard",
    navQuiz:"Trắc nghiệm", navTyping:"Gõ đáp án", navWrong:"Từ cần ôn", navFriends:"Bạn bè", navChat:"Tin nhắn", profileNav:"Hồ sơ", navSettings:"Cài đặt",
    friendsTitle:"Bạn bè", friendsSubtitle:"Kết bạn bằng username và học cùng nhau", friendSearchLabel:"Tìm username", friendSearchPlaceholder:"Nhập username...", friendSearchBtn:"🔎 Tìm", friendRequestsTitle:"Lời mời kết bạn", friendRequestsSubtitle:"Các yêu cầu đang chờ", friendsListTitle:"Danh sách bạn bè", friendsListSubtitle:"Bạn bè đã chấp nhận", friendRequestSent:"✅ Đã gửi lời mời", friendAdd:"Kết bạn", friendAccept:"Chấp nhận", friendDecline:"Từ chối", friendRemove:"Xóa bạn", friendChat:"Nhắn tin", friendPending:"Đang chờ", friendAccepted:"Đã là bạn", friendNoResults:"Không tìm thấy người dùng.", friendEmpty:"Chưa có bạn bè.", requestEmpty:"Không có lời mời nào.", chatTitle:"Tin nhắn", chatReady:"💬 Đã mở cuộc trò chuyện.", chatSubtitle:"Trò chuyện với bạn bè theo thời gian thực", conversationsTitle:"Cuộc trò chuyện", selectFriendToChat:"Chọn một người bạn để bắt đầu", chatPlaceholder:"Nhập tin nhắn...", sendMessage:"Gửi", chatEmpty:"Chưa có tin nhắn.", chatNeedFriend:"Hãy kết bạn trước khi bắt đầu trò chuyện.", online:"Đang hoạt động", offline:"Ngoại tuyến", saveCloudError:"Không thể đồng bộ lên máy chủ, dữ liệu cục bộ vẫn được giữ lại.",
    sidebarTipTitle:"Học một chút mỗi ngày!", sidebarTipText:"Tiến trình của bạn sẽ được lưu riêng theo tài khoản.",
    pageHome:"Trang chủ", homeEyebrow:"🐻 WELCOME TO STUDYBEAR",
    homeDescription:"Học từ vựng theo cách nhẹ nhàng, dễ nhớ và đáng yêu.",
    startLearning:"📖 Bắt đầu học", statLearned:"Từ đã học", statFavorite:"Yêu thích", statXP:"Điểm XP", statWrong:"Cần ôn",
    progressTitle:"Tiến trình học", progressSubtitle:"Hành trình của bạn", levelLabel:"Cấp độ",
    studyModesTitle:"Cách học", studyModesSubtitle:"Chọn một chế độ để luyện tập", modeFlashcard:"Lật thẻ ghi nhớ",
    modeQuiz:"Trắc nghiệm", modeQuizSub:"Kiểm tra nhanh", modeTyping:"Gõ đáp án", modeTypingSub:"Luyện phản xạ",
    modeAllWords:"Tất cả từ", modeAllWordsSub:"Xem từ vựng", vocabTitle:"Từ vựng", vocabSubtitle:"Chọn ngôn ngữ và chủ đề để học",
    searchPlaceholder:"🔎 Tìm từ vựng...", studyLanguageLabel:"🌱 Ngôn ngữ học", voiceLabel:"🔊 Giọng đọc",
    voiceLoading:"Đang tải giọng đọc...", voiceTest:"▶ Thử giọng", speakWord:"Nghe từ", previous:"← Trước",
    nextWord:"Từ tiếp theo →", quizTitle:"Trắc nghiệm", quizSubtitle:"Chọn đáp án đúng", questionLanguage:"Ngôn ngữ đích:",
    nextQuestion:"Câu tiếp theo →", typingTitle:"Gõ đáp án", typingSubtitle:"Nhớ từ rồi tự nhập câu trả lời",
    typePrompt:"Hãy nhập từ theo ngôn ngữ đang học:", typingPlaceholder:"Nhập đáp án...", checkAnswer:"Kiểm tra",
    wrongTitle:"Từ cần ôn", wrongSubtitle:"Những từ bạn từng trả lời sai", settingsTitle:"Tài khoản & dữ liệu",
    settingsSubtitle:"Quản lý tiến trình học của bạn", loggedInAs:"Đang đăng nhập", dataTitle:"💾 Dữ liệu học tập",
    dataSubtitle:"Tiến trình được lưu riêng trong trình duyệt cho từng tài khoản.", exportData:"📤 Xuất dữ liệu",
    resetData:"🗑️ Xóa tiến trình", noteTitle:"🔐 Lưu ý",
    noteText:"StudyBear ưu tiên Supabase cho tài khoản thật; LocalStorage chỉ được giữ tạm để bảo vệ dữ liệu cũ trong giai đoạn chuyển đổi.", authSubtitle:"Đăng nhập để lưu hành trình học của bạn 💙",
    loginTab:"Đăng nhập", registerTab:"Đăng ký", usernameLabel:"Tên đăng nhập", emailLabel:"Email", emailOrUsernameLabel:"Email hoặc username", passwordLabel:"Mật khẩu",
    loginBtn:"🐻 Đăng nhập", displayNameLabel:"Tên hiển thị", confirmPasswordLabel:"Nhập lại mật khẩu",
    registerBtn:"✨ Tạo tài khoản", guest:"Khách", notLogged:"Chưa đăng nhập", saved:"💾 Đã lưu thay đổi!",
    profileTitle:"Hồ sơ của bạn", profileSubtitle:"Chỉnh sửa thông tin cá nhân và bộ sưu tập",
    learningLanguage:"🌱 Ngôn ngữ học", nativeLanguage:"🏠 Ngôn ngữ mẹ đẻ", learningLevel:"📊 Trình độ ngôn ngữ",
    saveProfile:"💙 Lưu thay đổi", learningInfoTitle:"Thông tin học tập", learningInfoSubtitle:"Ngôn ngữ bạn đang sử dụng",
    levelMini:"Cấp độ", xpMini:"XP", learnedMini:"Đã học", collectionTitle:"Bộ sưu tập",
    collectionSubtitle:"Các bảng trưng bày theo mùa và chủ đề", spring:"Mùa xuân", summer:"Mùa hè", autumn:"Mùa thu",
    winter:"Mùa đông", special:"Chủ đề đặc biệt", topicTitle:"Chủ đề từ vựng", topicSubtitle:"Chọn chủ đề để học dễ dàng hơn",
    allTopics:"Tất cả", writingTopic:"Viết & sử dụng", dailyTopic:"Cuộc sống", historyTopic:"Lịch sử & phát minh",
    mechanismTopic:"Cấu tạo & nguyên lý", markLearned:"✓ Đã học từ này", targetLanguage:"Ngôn ngữ học",
    navDictionary:"Kho từ điển", dictionaryTitle:"Kho từ điển", dictionarySubtitle:"Tra cứu từ vựng trực tiếp từ Wiktionary",
    dictionarySourceLabel:"Ngôn ngữ tra cứu", dictionarySearchLabel:"Từ cần tra", dictionaryPlaceholder:"Nhập từ cần tra...",
    dictionarySearchBtn:"🔎 Tra cứu", dictionaryNote:"Kho từ điển được tải theo yêu cầu từ Wiktionary. Dữ liệu rất lớn nên không nhúng toàn bộ vào website; cách này nhẹ hơn và cho phép tra cứu nhiều ngôn ngữ.",
    dictionaryEmpty:"Nhập một từ để bắt đầu tra cứu."
  },
  en: {
    brandTagline:"Learn happily every day", navHome:"Home", navVocabulary:"Vocabulary", navLearned:"Learned", navFlashcard:"Flashcards",
    navQuiz:"Quiz", navTyping:"Type answer", navWrong:"Review", navFriends:"Friends", navChat:"Messages", profileNav:"Profile", navSettings:"Settings",
    friendsTitle:"Friends", friendsSubtitle:"Connect by username and learn together", friendSearchLabel:"Find username", friendSearchPlaceholder:"Enter username...", friendSearchBtn:"🔎 Search", friendRequestsTitle:"Friend requests", friendRequestsSubtitle:"Pending requests", friendsListTitle:"Friends list", friendsListSubtitle:"Accepted friends", friendRequestSent:"✅ Request sent", friendAdd:"Add friend", friendAccept:"Accept", friendDecline:"Decline", friendRemove:"Remove", friendChat:"Message", friendPending:"Pending", friendAccepted:"Friends", friendNoResults:"No user found.", friendEmpty:"No friends yet.", requestEmpty:"No pending requests.", chatTitle:"Messages", chatReady:"💬 Chat opened.", chatSubtitle:"Chat with friends in real time", conversationsTitle:"Conversations", selectFriendToChat:"Choose a friend to start", chatPlaceholder:"Type a message...", sendMessage:"Send", chatEmpty:"No messages yet.", chatNeedFriend:"Become friends before chatting.", online:"Online", offline:"Offline", saveCloudError:"Could not sync to the server; local data is still kept.",
    sidebarTipTitle:"A little every day!", sidebarTipText:"Your progress is saved separately for your account.",
    pageHome:"Home", homeEyebrow:"🐻 WELCOME TO STUDYBEAR",
    homeDescription:"Learn vocabulary in a gentle, memorable and cute way.", startLearning:"📖 Start learning",
    statLearned:"Words learned", statFavorite:"Favorites", statXP:"XP", statWrong:"To review",
    progressTitle:"Learning progress", progressSubtitle:"Your journey", levelLabel:"Level",
    studyModesTitle:"Study modes", studyModesSubtitle:"Choose a mode to practice", modeFlashcard:"Flip cards",
    modeQuiz:"Quiz", modeQuizSub:"Quick check", modeTyping:"Type answer", modeTypingSub:"Practice recall",
    modeAllWords:"All words", modeAllWordsSub:"View vocabulary", vocabTitle:"Vocabulary", vocabSubtitle:"Choose a language and topic to study",
    searchPlaceholder:"🔎 Search vocabulary...", studyLanguageLabel:"🌱 Learning language", voiceLabel:"🔊 Voice",
    voiceLoading:"Loading voices...", voiceTest:"▶ Test voice", speakWord:"Listen", previous:"← Previous",
    nextWord:"Next word →", quizTitle:"Quiz", quizSubtitle:"Choose the correct answer", questionLanguage:"Target language:",
    nextQuestion:"Next question →", typingTitle:"Type the answer", typingSubtitle:"Remember the word and type it yourself",
    typePrompt:"Type the word in your learning language:", typingPlaceholder:"Type your answer...", checkAnswer:"Check",
    wrongTitle:"Review words", wrongSubtitle:"Words you answered incorrectly", settingsTitle:"Account & data",
    settingsSubtitle:"Manage your learning progress", loggedInAs:"Signed in as", dataTitle:"💾 Learning data",
    dataSubtitle:"Progress is saved separately in this browser for each account.", exportData:"📤 Export data",
    resetData:"🗑️ Reset progress", noteTitle:"🔐 Note", noteText:"StudyBear uses Supabase for real accounts; LocalStorage is kept temporarily to protect legacy data during migration.",
    authSubtitle:"Sign in to save your learning journey 💙", loginTab:"Sign in", registerTab:"Register",
    usernameLabel:"Username", passwordLabel:"Password", loginBtn:"🐻 Sign in", displayNameLabel:"Display name",
    confirmPasswordLabel:"Confirm password", registerBtn:"✨ Create account", guest:"Guest", notLogged:"Not signed in",
    emailLabel:"Email", emailOrUsernameLabel:"Email or username", saved:"💾 Changes saved!", profileTitle:"Your profile", profileSubtitle:"Edit your personal information and collections",
    learningLanguage:"🌱 Learning language", nativeLanguage:"🏠 Native language", learningLevel:"📊 Language level",
    saveProfile:"💙 Save changes", learningInfoTitle:"Learning information", learningInfoSubtitle:"Your current language settings",
    levelMini:"Level", xpMini:"XP", learnedMini:"Learned", collectionTitle:"Collection",
    collectionSubtitle:"Seasonal and themed display boards", spring:"Spring", summer:"Summer", autumn:"Autumn", winter:"Winter",
    special:"Special theme", topicTitle:"Vocabulary topics", topicSubtitle:"Choose a topic to study more easily",
    allTopics:"All", writingTopic:"Writing & use", dailyTopic:"Daily life", historyTopic:"History & inventions",
    mechanismTopic:"Structure & principles", markLearned:"✓ Mark as learned", targetLanguage:"Learning language",
    navDictionary:"Dictionary", dictionaryTitle:"Dictionary", dictionarySubtitle:"Search vocabulary directly from Wiktionary",
    dictionarySourceLabel:"Search language", dictionarySearchLabel:"Word to search", dictionaryPlaceholder:"Enter a word...",
    dictionarySearchBtn:"🔎 Search", dictionaryNote:"Dictionary entries are loaded on demand from Wiktionary. The datasets are very large, so the website does not bundle them; this keeps the site lightweight and supports many languages.",
    dictionaryEmpty:"Enter a word to start searching."
  },
  ko: {
    brandTagline:"매일 즐겁게 공부해요", navHome:"홈", navVocabulary:"단어", navLearned:"학습한 단어", navFlashcard:"플래시카드",
    navQuiz:"퀴즈", navTyping:"답 입력", navWrong:"복습", navFriends:"친구", navChat:"메시지", profileNav:"프로필", navSettings:"설정",
    friendsTitle:"친구", friendsSubtitle:"사용자 이름으로 친구를 추가하고 함께 공부하세요", friendSearchLabel:"사용자 이름 검색", friendSearchPlaceholder:"사용자 이름 입력...", friendSearchBtn:"🔎 검색", friendRequestsTitle:"친구 요청", friendRequestsSubtitle:"대기 중인 요청", friendsListTitle:"친구 목록", friendsListSubtitle:"수락한 친구", friendRequestSent:"✅ 요청 보냄", friendAdd:"친구 추가", friendAccept:"수락", friendDecline:"거절", friendRemove:"삭제", friendChat:"메시지", friendPending:"대기 중", friendAccepted:"친구", friendNoResults:"사용자를 찾을 수 없습니다.", friendEmpty:"아직 친구가 없습니다.", requestEmpty:"대기 중인 요청이 없습니다.", chatTitle:"메시지", chatReady:"💬 대화를 열었습니다.", chatSubtitle:"친구와 실시간으로 대화하세요", conversationsTitle:"대화", selectFriendToChat:"대화할 친구를 선택하세요", chatPlaceholder:"메시지를 입력하세요...", sendMessage:"보내기", chatEmpty:"아직 메시지가 없습니다.", chatNeedFriend:"먼저 친구가 된 후 대화할 수 있습니다.", online:"온라인", offline:"오프라인", saveCloudError:"서버와 동기화하지 못했습니다. 로컬 데이터는 유지됩니다.",
    sidebarTipTitle:"매일 조금씩!", sidebarTipText:"학습 진행 상황은 계정별로 따로 저장됩니다.",
    pageHome:"홈", homeEyebrow:"🐻 STUDYBEAR에 오신 것을 환영해요",
    homeDescription:"부담 없이 쉽고 재미있게 단어를 공부해요.", startLearning:"📖 공부 시작",
    statLearned:"학습한 단어", statFavorite:"즐겨찾기", statXP:"XP", statWrong:"복습 필요",
    progressTitle:"학습 진행도", progressSubtitle:"나의 학습 여정", levelLabel:"레벨",
    studyModesTitle:"학습 방법", studyModesSubtitle:"연습할 방법을 선택하세요", modeFlashcard:"카드 뒤집기",
    modeQuiz:"퀴즈", modeQuizSub:"빠른 확인", modeTyping:"답 입력", modeTypingSub:"기억력 연습",
    modeAllWords:"전체 단어", modeAllWordsSub:"단어 보기", vocabTitle:"단어", vocabSubtitle:"언어와 주제를 선택하세요",
    searchPlaceholder:"🔎 단어 검색...", studyLanguageLabel:"🌱 학습 언어", voiceLabel:"🔊 음성",
    voiceLoading:"음성을 불러오는 중...", voiceTest:"▶ 음성 테스트", speakWord:"단어 듣기", previous:"← 이전",
    nextWord:"다음 단어 →", quizTitle:"퀴즈", quizSubtitle:"정답을 선택하세요", questionLanguage:"학습 언어:",
    nextQuestion:"다음 문제 →", typingTitle:"답 입력", typingSubtitle:"단어를 기억하고 직접 입력하세요",
    typePrompt:"학습 언어로 단어를 입력하세요:", typingPlaceholder:"답을 입력하세요...", checkAnswer:"확인",
    wrongTitle:"복습할 단어", wrongSubtitle:"틀렸던 단어를 다시 공부하세요", settingsTitle:"계정 및 데이터",
    settingsSubtitle:"학습 진행 상황을 관리하세요", loggedInAs:"로그인 계정", dataTitle:"💾 학습 데이터",
    dataSubtitle:"진행 상황은 브라우저에서 계정별로 저장됩니다.", exportData:"📤 데이터 내보내기",
    resetData:"🗑️ 진행 상황 초기화", noteTitle:"🔐 안내", noteText:"StudyBear는 실제 계정에 Supabase를 사용하며, 마이그레이션 기간에는 기존 데이터를 보호하기 위해 LocalStorage를 임시로 유지합니다.",
    authSubtitle:"로그인하여 학습 기록을 저장하세요 💙", loginTab:"로그인", registerTab:"회원가입",
    usernameLabel:"사용자 이름", passwordLabel:"비밀번호", loginBtn:"🐻 로그인", displayNameLabel:"표시 이름",
    confirmPasswordLabel:"비밀번호 확인", registerBtn:"✨ 계정 만들기", guest:"게스트", notLogged:"로그인하지 않음",
    emailLabel:"이메일", emailOrUsernameLabel:"이메일 또는 사용자 이름", saved:"💾 변경사항이 저장되었습니다!", profileTitle:"프로필", profileSubtitle:"개인 정보와 컬렉션을 관리하세요",
    learningLanguage:"🌱 학습 언어", nativeLanguage:"🏠 모국어", learningLevel:"📊 언어 수준",
    saveProfile:"💙 변경사항 저장", learningInfoTitle:"학습 정보", learningInfoSubtitle:"현재 언어 설정",
    levelMini:"레벨", xpMini:"XP", learnedMini:"학습 완료", collectionTitle:"컬렉션",
    collectionSubtitle:"시즌 및 테마 전시 보드", spring:"봄", summer:"여름", autumn:"가을", winter:"겨울", special:"특별 테마",
    topicTitle:"단어 주제", topicSubtitle:"공부할 주제를 선택하세요", studyTopicLabel:"🗂️ 학습 주제", allTopics:"전체", allLevels:"전체", beginnerLevel:"초급", basicLevel:"기초", intermediateLevel:"중급", advancedLevel:"고급", fluentLevel:"유창함",
    frequency1000Label:"🌟 1000개 핵심 단어", nativeTranslationMissing:"이 항목에는 검증된 모국어 번역이 없습니다", frequencyLoading:"1000개 핵심 단어를 불러오는 중...", frequencyError:"1000개 단어를 불러올 수 없습니다.",
    writingTopic:"쓰기 및 사용", dailyTopic:"생활", historyTopic:"역사 및 발명", mechanismTopic:"구조 및 원리",
    markLearned:"✓ 학습 완료", targetLanguage:"학습 언어"
  }
};

const TOPICS = {
  all:{ vi:"Tất cả", en:"All", ko:"전체" },
  frequency1000:{ vi:"🌟 1000 từ phổ biến", en:"🌟 Top 1000", ko:"🌟 1000개 핵심 단어" },
  writing:{ vi:"Viết & sử dụng", en:"Writing & use", ko:"쓰기 및 사용" },
  daily:{ vi:"Cuộc sống", en:"Daily life", ko:"생활" },
  people:{ vi:"Con người & gia đình", en:"People & family", ko:"사람 및 가족" },
  study:{ vi:"Học tập", en:"Study", ko:"학습" },
  work:{ vi:"Công việc", en:"Work", ko:"직장" },
  economy:{ vi:"Kinh tế", en:"Economy", ko:"경제" },
  shopping:{ vi:"Mua sắm", en:"Shopping", ko:"쇼핑" },
  food:{ vi:"Ăn uống", en:"Food", ko:"음식" },
  health:{ vi:"Sức khỏe", en:"Health", ko:"건강" },
  home:{ vi:"Nhà cửa", en:"Home", ko:"집" },
  travel:{ vi:"Đi lại & du lịch", en:"Travel & transport", ko:"여행 및 교통" },
  time:{ vi:"Thời gian", en:"Time", ko:"시간" },
  environment:{ vi:"Môi trường & thiên nhiên", en:"Environment & nature", ko:"환경 및 자연" },
  society:{ vi:"Xã hội", en:"Society", ko:"사회" },
  history:{ vi:"Lịch sử & phát minh", en:"History & inventions", ko:"역사 및 발명" },
  exam:{ vi:"Thi cử & học thuật", en:"Exams & academic", ko:"시험 및 학술" },
  emotion:{ vi:"Cảm xúc", en:"Emotions", ko:"감정" },
  communication:{ vi:"Giao tiếp", en:"Communication", ko:"의사소통" },
  mechanism:{ vi:"Cấu tạo & nguyên lý", en:"Structure & principles", ko:"구조 및 원리" },
  science:{ vi:"Khoa học", en:"Science", ko:"과학" },
  media:{ vi:"Truyền thông & giải trí", en:"Media & entertainment", ko:"미디어 및 여가" },
  technology:{ vi:"Công nghệ", en:"Technology", ko:"기술" }
};

const LEVELS = ["beginner","basic","intermediate","advanced","fluent"];
const LEVEL_LABELS = {
  vi:{ all:"Tất cả mức độ", beginner:"Sơ cấp", basic:"Căn bản", intermediate:"Trung cấp", advanced:"Cao cấp", fluent:"Thông thạo" },
  en:{ all:"All levels", beginner:"Beginner", basic:"Basic", intermediate:"Intermediate", advanced:"Advanced", fluent:"Fluent" },
  ko:{ all:"전체", beginner:"초급", basic:"기초", intermediate:"중급", advanced:"고급", fluent:"유창함" }
};

const STORAGE_USERS = "studyBearAccountsCleanV5";
const STORAGE_CURRENT = "studyBearCurrentUserCleanV5";

let users = loadUsers();
let currentUsername = localStorage.getItem(STORAGE_CURRENT) || null;
let state = null;

let currentPage = "home";
let currentTopic = "all";
let currentLevel = "all";
let studyTopic = "all";
let flashPosition = 0;
let quizRound = 0;
let typingRound = 0;
let flashIndex = 0;
let quizIndex = 0;
let quizAnswered = false;
let quizCorrectCount = 0;
let typingIndex = 0;
let typingChecked = false;
let toastTimer = null;

const $ = id => document.getElementById(id);

function safeParse(raw, fallback) {
  try { return JSON.parse(raw) ?? fallback; } catch { return fallback; }
}

function normalizeUsername(value) {
  return String(value ?? "").trim().toLowerCase().replace(/\s+/g, "");
}

function usernameExists(username) {
  return Object.prototype.hasOwnProperty.call(users, username);
}

function makeDefaultUser(displayName) {
  return {
    displayName,
    bio:"",
    password:"",
    avatar:"",
    interfaceLanguage:"vi",
    learningLanguage:"ko",
    learningLevel:"beginner",
    nativeLanguage:"vi",
    voiceByLanguage:{},
    learned:[],
    favorites:[],
    wrong:[],
    xp:0,
    dark:false,
    createdAt:new Date().toISOString()
  };
}

function normalizeUser(user) {
  const base = makeDefaultUser(user?.displayName || "User");
  return {
    ...base,
    ...(user || {}),
    bio:typeof user?.bio === "string" ? user.bio.slice(0,180) : "",
    learned:Array.isArray(user?.learned) ? user.learned.filter(Number.isInteger) : [],
    favorites:Array.isArray(user?.favorites) ? user.favorites.filter(Number.isInteger) : [],
    wrong:Array.isArray(user?.wrong) ? user.wrong.filter(Number.isInteger) : [],
    xp:Number.isFinite(Number(user?.xp)) ? Math.max(0, Number(user.xp)) : 0,
    interfaceLanguage:["vi","en","ko"].includes(user?.interfaceLanguage) ? user.interfaceLanguage : "vi",
    learningLanguage:["vi","en","ko","ru","zh"].includes(user?.learningLanguage) ? user.learningLanguage : "ko",
    learningLevel:LEVELS.includes(user?.learningLevel) ? user.learningLevel : "beginner",
    nativeLanguage:["vi","en","ko","ru","zh"].includes(user?.nativeLanguage) ? user.nativeLanguage : "vi",
    voiceByLanguage:user?.voiceByLanguage && typeof user.voiceByLanguage === "object" ? user.voiceByLanguage : {},
    avatar:typeof user?.avatar === "string" ? user.avatar : "",
    avatarUrl:typeof user?.avatarUrl === "string" ? user.avatarUrl : "",
    password:typeof user?.password === "string" ? user.password : ""
  };
}

function loadUsers() {
  const raw = safeParse(localStorage.getItem(STORAGE_USERS), {});
  const out = Object.create(null);

  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    for (const [name,user] of Object.entries(raw)) {
      const username = normalizeUsername(name);
      if (username) out[username] = normalizeUser(user);
    }
  }
  return out;
}

function saveAllUsers() {
  localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

function saveState() {
  if (!state || !currentUsername) return;
  users[currentUsername] = normalizeUser(state);
  state = users[currentUsername];
  saveAllUsers();
  // LocalStorage remains the immediate source for UI responsiveness.
  // Supabase is synchronized asynchronously so a network problem never freezes StudyBear.
  syncStateToSupabase().catch(error => console.warn("[StudyBear] Supabase sync skipped:", error));
}

function loadCurrentUser() {
  state = currentUsername && usernameExists(currentUsername)
    ? normalizeUser(users[currentUsername])
    : null;

  if (state) {
    users[currentUsername] = state;
    saveAllUsers();
  }
}

function requireLogin() {
  if (state) return true;
  openAuth();
  showToast("🐻 Hãy đăng nhập để sử dụng chức năng này.");
  return false;
}

/* ---------- SUPABASE AUTH BRIDGE ---------- */
function getSupabaseClient() {
  return window.studyBearSupabase || null;
}

function hasSupabaseAuth() {
  const client = getSupabaseClient();
  return Boolean(client && window.studyBearSupabaseReady);
}

function showAuthMessage(id, text, kind="error") {
  const el = $(id);
  if (!el) return;
  el.textContent = text;
  el.style.color = kind === "success" ? "var(--success)" : "var(--danger)";
}

async function loadSupabaseUserState(user) {
  const client = getSupabaseClient();
  if (!client || !user) return false;

  const { data: profile, error: profileError } = await client
    .from("profiles")
    .select("id,username,display_name,bio,avatar_url,interface_language,native_language,learning_language,learning_level,xp")
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) {
    console.warn("[StudyBear] Profile load failed:", profileError);
    return false;
  }

  const { data: progress, error: progressError } = await client
    .from("learning_progress")
    .select("vocabulary_id,learned,favorite,wrong_count")
    .eq("user_id", user.id);

  if (progressError) {
    console.warn("[StudyBear] Progress load failed:", progressError);
    return false;
  }

  const username = normalizeUsername(profile?.username || user.user_metadata?.username || user.email?.split("@")[0] || "user");
  const localFallback = users[username] ? normalizeUser(users[username]) : makeDefaultUser(profile?.display_name || user.email?.split("@")[0] || "User");

  const nextState = normalizeUser({
    ...localFallback,
    displayName: profile?.display_name || user.user_metadata?.display_name || localFallback.displayName,
    bio: typeof profile?.bio === "string" ? profile.bio : localFallback.bio,
    collectionItems: Array.isArray(localFallback.collectionItems) ? localFallback.collectionItems : [],
    interfaceLanguage: profile?.interface_language || localFallback.interfaceLanguage,
    nativeLanguage: profile?.native_language || localFallback.nativeLanguage,
    learningLanguage: profile?.learning_language || localFallback.learningLanguage,
    learningLevel: profile?.learning_level || localFallback.learningLevel,
    xp: Number.isFinite(Number(profile?.xp)) ? Number(profile.xp) : localFallback.xp,
    avatar: profile?.avatar_url || localFallback.avatar,
    avatarUrl: profile?.avatar_url || localFallback.avatarUrl || "",
    password: ""
  });

  const learned=[]; const favorites=[]; const wrong=[];
  for (const row of (progress || [])) {
    const index=Number(row.vocabulary_id);
    if (!Number.isInteger(index) || !vocabulary[index]) continue;
    if (row.learned) learned.push(index);
    if (row.favorite) favorites.push(index);
    if (Number(row.wrong_count) > 0) wrong.push(index);
  }
  nextState.learned=[...new Set(learned)];
  nextState.favorites=[...new Set(favorites)];
  nextState.wrong=[...new Set(wrong)];

  currentUsername=username;
  users[currentUsername]=nextState;
  state=nextState;
  localStorage.setItem(STORAGE_CURRENT,currentUsername);
  saveAllUsers();
  return true;
}

async function syncStateToSupabase() {
  const client=getSupabaseClient();
  if (!client || !state || !currentUsername) return;

  const { data: { user }, error:userError } = await client.auth.getUser();
  if (userError || !user) return;

  const profilePayload={
    id:user.id,
    username:currentUsername,
    display_name:state.displayName,
    bio:state.bio || "",
    interface_language:state.interfaceLanguage,
    native_language:state.nativeLanguage,
    learning_language:state.learningLanguage,
    learning_level:state.learningLevel,
    xp:state.xp,
    avatar_url: state.avatarUrl || (state.avatar && !state.avatar.startsWith("data:") ? state.avatar : null),
    updated_at:new Date().toISOString()
  };

  const { error:profileError }=await client.from("profiles").upsert(profilePayload,{onConflict:"id"});
  if (profileError) throw profileError;

  const indexes=new Set([
    ...(state.learned||[]),
    ...(state.favorites||[]),
    ...(state.wrong||[])
  ]);

  if (!indexes.size) return;

  const rows=[...indexes]
    .filter(index=>Number.isInteger(index) && vocabulary[index])
    .map(index=>({
      user_id:user.id,
      vocabulary_id:String(index),
      learned:state.learned.includes(index),
      favorite:state.favorites.includes(index),
      wrong_count:state.wrong.includes(index) ? 1 : 0,
      last_studied_at:state.learned.includes(index) ? new Date().toISOString() : null
    }));

  if (rows.length) {
    const { error:progressError }=await client
      .from("learning_progress")
      .upsert(rows,{onConflict:"user_id,vocabulary_id"});
    if (progressError) throw progressError;
  }
}

async function migrateAvatarToCloudIfNeeded() {
  if (!state || !hasSupabaseAuth()) return;
  if (!state.avatar || !state.avatar.startsWith("data:image") || state.avatarUrl) return;

  try {
    const response = await fetch(state.avatar);
    const blob = await response.blob();
    const file = new File([blob], "avatar.webp", { type: blob.type || "image/png" });
    const cloudUrl = await uploadAvatarToSupabase(file);
    if (cloudUrl) {
      state.avatarUrl = cloudUrl;
      state.avatar = cloudUrl;
      saveState();
      renderProfile();
      updateUserUI();
    }
  } catch (error) {
    console.warn("[StudyBear] Legacy avatar migration skipped:", error);
  }
}

async function handleSupabaseSession(session) {
  if (!session?.user) return;
  const ok=await loadSupabaseUserState(session.user);
  if (!ok) {
    showToast("⚠️ Không thể tải hồ sơ Supabase.");
    return;
  }
  await migrateAvatarToCloudIfNeeded();
  updateUserUI();
  applyTheme();
  applyInterfaceLanguage();
  syncStudyLanguageFromProfile();
  refreshAll();
  window.StudyBearSocial?.boot();
  closeAuth();
}

function initSupabaseAuthBridge() {
  const client=getSupabaseClient();
  if (!client) return;

  client.auth.getSession().then(({data,error})=>{
    if (error) {
      console.warn("[StudyBear] Session load failed:",error);
      return;
    }
    if (data?.session) handleSupabaseSession(data.session);
  });

  client.auth.onAuthStateChange((event,session)=>{
    // Defer to avoid running heavy UI/database work inside the Auth callback.
    setTimeout(()=>{
      if (session && ["SIGNED_IN","TOKEN_REFRESHED","INITIAL_SESSION"].includes(event)) {
        handleSupabaseSession(session);
      }
      if (event === "SIGNED_OUT") {
        currentUsername=null;
        state=null;
        localStorage.removeItem(STORAGE_CURRENT);
        updateUserUI();
        refreshAll();
        window.StudyBearSocial?.cleanup();
      }
    },0);
  });
}

/* ---------- AUTH ---------- */

function openAuth() { $("authOverlay").classList.add("show"); }
function closeAuth() { $("authOverlay").classList.remove("show"); }

$("authClose").addEventListener("click", closeAuth);
$("authOverlay").addEventListener("click", e => {
  if (e.target === $("authOverlay")) closeAuth();
});

document.querySelectorAll(".auth-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const type = tab.dataset.authTab;
    document.querySelectorAll(".auth-tab").forEach(t => t.classList.toggle("active", t === tab));
    $("loginForm").classList.toggle("active", type === "login");
    $("registerForm").classList.toggle("active", type === "register");
    $("loginMessage").textContent = "";
    $("registerMessage").textContent = "";
  });
});

$("registerForm").addEventListener("submit", async e => {
  e.preventDefault();

  const displayName = $("registerDisplayName").value.trim();
  const email = $("registerEmail")?.value.trim().toLowerCase() || "";
  const username = normalizeUsername($("registerUsername").value);
  const password = $("registerPassword").value;
  const password2 = $("registerPassword2").value;
  const msg = $("registerMessage");

  const fail = text => showAuthMessage("registerMessage", text, "error");

  if (!displayName || !email || !username || !password || !password2) return fail("⚠️ Vui lòng điền đầy đủ thông tin.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail("⚠️ Email không hợp lệ.");
  if (!/^[a-z0-9_.-]{3,24}$/.test(username)) return fail("⚠️ Username phải có 3–24 ký tự và không có khoảng trắng.");
  if (password.length < 6) return fail("⚠️ Mật khẩu phải có ít nhất 6 ký tự.");
  if (password !== password2) return fail("⚠️ Hai mật khẩu không giống nhau.");

  if (!hasSupabaseAuth()) {
    if (usernameExists(username)) return fail("❌ Username này đã được sử dụng.");
    users[username] = makeDefaultUser(displayName);
    users[username].password = password;
    users[username].email = email;
    saveAllUsers();
    loginAs(username);
    showToast("🎉 Tạo tài khoản cục bộ thành công!");
    return;
  }

  const client=getSupabaseClient();
  const {data,error}=await client.auth.signUp({
    email,
    password,
    options:{
      data:{username,display_name:displayName}
    }
  });

  if (error) {
    console.error("[StudyBear] Supabase signup error:",error);
    return fail(error.message || "❌ Không thể tạo tài khoản.");
  }

  // Confirm email is enabled in this project, so a new signup normally has no session yet.
  if (data?.session) {
    await handleSupabaseSession(data.session);
    showToast("🎉 Tạo tài khoản thành công!");
  } else {
    showAuthMessage(
      "registerMessage",
      "✅ Đăng ký thành công. Hãy kiểm tra email để xác nhận tài khoản rồi đăng nhập.",
      "success"
    );
  }
});

$("loginForm").addEventListener("submit", async e => {
  e.preventDefault();

  const identifier = $("loginUsername").value.trim();
  const password = $("loginPassword").value;

  if (!identifier || !password) {
    showAuthMessage("loginMessage", "⚠️ Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  // Supabase accounts use the real email/password.
  if (hasSupabaseAuth() && identifier.includes("@")) {
    const client=getSupabaseClient();
    const {data,error}=await client.auth.signInWithPassword({email:identifier.toLowerCase(),password});
    if (error) {
      console.error("[StudyBear] Supabase login error:",error);
      showAuthMessage("loginMessage", error.message || "❌ Đăng nhập thất bại.");
      return;
    }
    if (data?.session) await handleSupabaseSession(data.session);
    showToast("👋 Chào mừng bạn quay trở lại!");
    return;
  }

  // Keep old local accounts working during the migration.
  const username=normalizeUsername(identifier);
  if (!usernameExists(username)) {
    showAuthMessage("loginMessage", "❌ Tài khoản không tồn tại. Với tài khoản mới, hãy đăng nhập bằng email.");
    return;
  }

  const user=normalizeUser(users[username]);
  if (user.password !== password) {
    showAuthMessage("loginMessage", "❌ Mật khẩu không chính xác.");
    return;
  }

  users[username]=user;
  saveAllUsers();
  loginAs(username);
  showToast("👋 Đăng nhập bằng tài khoản cũ thành công.");
});

function loginAs(username) {
  currentUsername = normalizeUsername(username);
  localStorage.setItem(STORAGE_CURRENT, currentUsername);
  loadCurrentUser();
  updateUserUI();
  applyTheme();
  applyInterfaceLanguage();
  syncStudyLanguageFromProfile();
  refreshAll();
  closeAuth();
}

function logoutUser() {
  saveState();
  currentUsername = null;
  state = null;
  localStorage.removeItem(STORAGE_CURRENT);
  updateUserUI();
  applyTheme();
  applyInterfaceLanguage();
  refreshAll();
  updateLearnedNavCount();
  window.StudyBearSocial?.cleanup();
  showToast("👋 Bạn đã đăng xuất.");
}

function updateUserUI() {
  const ui = UI[getUILang()];

  if (state) {
    $("currentUserName").textContent = state.displayName;
    $("currentUserStatus").textContent = ui.loggedInAs;
    $("authActionButton").textContent = ui.navSettings === "설정" ? "로그아웃" : (getUILang() === "en" ? "Sign out" : getUILang() === "ko" ? "로그아웃" : "Đăng xuất");
    $("authActionButton").onclick = logoutUser;
    $("settingsName").textContent = state.displayName;
    $("settingsAuthBtn").textContent = getUILang() === "en" ? "Sign out" : getUILang() === "ko" ? "로그아웃" : "Đăng xuất";
    $("settingsAuthBtn").onclick = logoutUser;
    $("userAvatar").textContent = "🐻";
  } else {
    $("currentUserName").textContent = ui.guest;
    $("currentUserStatus").textContent = ui.notLogged;
    $("authActionButton").textContent = getUILang() === "en" ? "Sign in" : getUILang() === "ko" ? "로그인" : "Đăng nhập";
    $("authActionButton").onclick = openAuth;
    $("settingsName").textContent = ui.guest;
    $("settingsAuthBtn").textContent = getUILang() === "en" ? "Sign in" : getUILang() === "ko" ? "로그인" : "Đăng nhập";
    $("settingsAuthBtn").onclick = openAuth;
    $("userAvatar").textContent = "🐻";
  }

  if (state?.avatar) {
    $("userAvatar").style.backgroundImage = `url("${state.avatar}")`;
    $("userAvatar").style.backgroundSize = "cover";
    $("userAvatar").textContent = "";
  } else {
    $("userAvatar").style.backgroundImage = "";
    $("userAvatar").textContent = "🐻";
  }
}

/* ---------- INTERFACE LANGUAGE ---------- */

function getUILang() {
  if (state?.interfaceLanguage && UI[state.interfaceLanguage]) return state.interfaceLanguage;
  const guest = localStorage.getItem("studyBearGuestLanguage");
  return UI[guest] ? guest : "vi";
}

function applyInterfaceLanguage() {
  const lang = getUILang();
  const dict = UI[lang];

  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  $("interfaceLanguage").value = lang;
  updatePageTitle();
  updateUserUI();
  renderTopics();
  renderLevels();
  renderStudyTopicOptions();
  renderVocabulary();
  renderProfile();
  newQuiz();
  newTyping();
  updateFlashcard();
  if ($("dictionaryResults")) {
    $("dictionaryResults").innerHTML = `<div class="empty"><div class="empty-bear">🐻</div>${escapeHTML(UI[getUILang()].dictionaryEmpty)}</div>`;
  }
}

$("interfaceLanguage").addEventListener("change", e => {
  const lang = e.target.value;
  if (state) {
    state.interfaceLanguage = lang;
    saveState();
  } else {
    localStorage.setItem("studyBearGuestLanguage", lang);
  }
  applyInterfaceLanguage();
});

/* ---------- NAV ---------- */

const PAGE_KEYS = {
  home:"pageHome", dictionary:"dictionaryTitle", vocabulary:"vocabTitle", flashcard:"flashTitle",
  quiz:"quizTitle", typing:"typingTitle", wrong:"wrongTitle", learned:"learnedPageTitle", profile:"profileNav", settings:"navSettings"
};

function updatePageTitle() {
  const dict = UI[getUILang()];
  $("pageTitle").textContent = dict[PAGE_KEYS[currentPage]] || dict.pageHome;
}

function showPage(page) {
  const target = $("page-" + page);
  if (!target) return;

  currentPage = page;
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  target.classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.page === page));
  updatePageTitle();

  if (page === "dictionary") {
    if ($("dictionarySource")) $("dictionarySource").value = currentNativeLanguage();
  }
  if (page === "vocabulary") {
    renderTopics();
    renderLevels();
    renderVocabulary();
    populateVoiceSelect();
  }
  if (page === "profile") renderProfile();
  if (page === "quiz") newQuiz();
  if (page === "typing") newTyping();
  if (page === "learned") renderLearnedVault();
  if (page === "friends") window.StudyBearSocial?.onPage("friends");
  if (page === "chat") window.StudyBearSocial?.onPage("chat");

  $("sidebar").classList.remove("open");
}

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => showPage(btn.dataset.page));
});

document.querySelectorAll("[data-page-target]").forEach(btn => {
  btn.addEventListener("click", () => showPage(btn.dataset.pageTarget));
});

$("menuBtn").addEventListener("click", () => $("sidebar").classList.toggle("open"));

$("userBox").addEventListener("click", e => {
  if (e.target.closest("#authActionButton")) return;
  if (state) showPage("profile");
  else openAuth();
});

/* ---------- PROFILE ---------- */

const LANGUAGE_NAMES = {
  vi:{ vi:"🇻🇳 Tiếng Việt", en:"🇬🇧 English", ko:"🇰🇷 한국어", ru:"🇷🇺 Русский", zh:"🇨🇳 中文" },
  en:{ vi:"🇻🇳 Vietnamese", en:"🇬🇧 English", ko:"🇰🇷 Korean", ru:"🇷🇺 Russian", zh:"🇨🇳 Chinese" },
  ko:{ vi:"🇻🇳 베트남어", en:"🇬🇧 영어", ko:"🇰🇷 한국어", ru:"🇷🇺 러시아어", zh:"🇨🇳 중국어" }
};

function renderProfile() {
  if (!state) {
    $("profileUsername").textContent = "@guest";
    $("profileDisplayName").value = "";
    $("profileAvatar").textContent = "🐻";
    return;
  }

  $("profileUsername").textContent = "@" + currentUsername;
  $("profileDisplayName").value = state.displayName;
  if($("profileBio")) $("profileBio").value = state.bio || "";
  $("learningLanguage").value = state.learningLanguage;
  $("nativeLanguage").value = state.nativeLanguage;
  $("learningLevel").value = state.learningLevel;

  if (state.avatar) {
    $("profileAvatar").style.backgroundImage = `url("${state.avatar}")`;
    $("profileAvatar").style.backgroundSize = "cover";
    $("profileAvatar").style.backgroundPosition = "center";
    $("profileAvatar").textContent = "";
    $("profileAvatar").classList.remove("default-avatar");
  } else {
    $("profileAvatar").style.backgroundImage = "";
    $("profileAvatar").textContent = "🐻";
    $("profileAvatar").classList.add("default-avatar");
  }

  updateProfileSummary();
}

function updateProfileSummary() {
  if (!state) return;
  const uiLang = getUILang();
  $("summaryLearningLanguage").textContent = LANGUAGE_NAMES[uiLang][state.learningLanguage];
  $("summaryNativeLanguage").textContent = LANGUAGE_NAMES[uiLang][state.nativeLanguage];
  $("profileLevel").textContent = Math.floor(state.xp / 100) + 1;
  $("profileXP").textContent = state.xp;
  $("profileLearned").textContent = state.learned.length;
}

$("saveProfileBtn").addEventListener("click", () => {
  if (!requireLogin()) return;

  const name = $("profileDisplayName").value.trim();
  if (!name) {
    $("profileMessage").textContent = "⚠️ Tên hiển thị không được để trống.";
    return;
  }

  state.displayName = name.slice(0,30);
  state.bio = String($("profileBio")?.value || "").trim().slice(0,180);
  state.learningLanguage = $("learningLanguage").value;
  state.nativeLanguage = $("nativeLanguage").value;
  state.learningLevel = $("learningLevel").value;
  saveState();

  syncStudyLanguageFromProfile();
  updateUserUI();
  updateDashboard();
  renderProfile();
  renderVocabulary();
  newQuiz();
  newTyping();
  updateFlashcard();
  renderStudyTopicOptions();
  populateVoiceSelect();
  showToast(UI[getUILang()].saved);
});

async function uploadAvatarToSupabase(file) {
  const client = getSupabaseClient();
  if (!client) return null;

  const { data: { user }, error: userError } = await client.auth.getUser();
  if (userError || !user) return null;

  const ext = "webp";
  const path = `${user.id}/avatar.webp`;
  let body = file;

  // Compress large images before upload. Falls back to the original file if canvas is unavailable.
  try {
    const bitmap = await createImageBitmap(file);
    const maxSize = 640;
    const ratio = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * ratio));
    canvas.height = Math.max(1, Math.round(bitmap.height * ratio));
    const ctx = canvas.getContext("2d", { alpha: true });
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    body = await new Promise(resolve => canvas.toBlob(resolve, "image/webp", 0.86));
    bitmap.close?.();
  } catch (error) {
    console.info("[StudyBear] Avatar compression fallback.", error);
  }

  const { error: uploadError } = await client.storage
    .from("avatars")
    .upload(path, body, { upsert: true, contentType: "image/webp", cacheControl: "3600" });

  if (uploadError) throw uploadError;

  const { data: publicData } = client.storage
    .from("avatars")
    .getPublicUrl(path);

  const publicUrl = `${publicData.publicUrl}?v=${Date.now()}`;

  const { error: profileError } = await client
    .from("profiles")
    .update({ avatar_url: publicUrl, updated_at: new Date().toISOString() })
    .eq("id", user.id);

  if (profileError) throw profileError;

  return publicUrl;
}

$("avatarInput").addEventListener("change", async e => {
  if (!requireLogin()) return;

  const file = e.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showToast("⚠️ Vui lòng chọn một file ảnh.");
    e.target.value = "";
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    showToast("⚠️ Ảnh đại diện tối đa 2MB.");
    e.target.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = async () => {
    // Immediate local preview keeps the UI responsive.
    state.avatar = reader.result;
    renderProfile();
    updateUserUI();
    saveState();

    if (hasSupabaseAuth()) {
      try {
        const cloudUrl = await uploadAvatarToSupabase(file);
        if (cloudUrl) {
          state.avatarUrl = cloudUrl;
          state.avatar = cloudUrl;
          saveState();
          renderProfile();
          updateUserUI();
          showToast("☁️ Ảnh đại diện đã đồng bộ.");
          return;
        }
      } catch (error) {
        console.error("[StudyBear] Avatar cloud sync failed:", error);
        showToast(UI[getUILang()].saveCloudError || "⚠️ Không thể đồng bộ ảnh.");
      }
    }

    showToast("📷 Đã đổi ảnh đại diện trên thiết bị này.");
  };
  reader.readAsDataURL(file);
});

/* ---------- PROFILE LANGUAGE = MAIN VOCABULARY LANGUAGE ---------- */

function syncStudyLanguageFromProfile() {
  if ($("studyLanguage")) {
    $("studyLanguage").value = state?.learningLanguage || "ko";
  }
}


/* ---------- DICTIONARY INTEGRATION ---------- */

const WIKTIONARY_WIKI = {
  vi:"vi",
  en:"en",
  ko:"ko",
  ru:"ru",
  zh:"zh"
};

let dictionaryRequestId = 0;


async function getDictionarySuggestions(term, source) {
  const wiki = WIKTIONARY_WIKI[source] || "en";
  const url = `https://${wiki}.wiktionary.org/w/api.php?action=opensearch&search=${encodeURIComponent(term)}&limit=5&namespace=0&format=json&origin=*`;
  try {
    const response = await fetch(url);
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data?.[1]) ? data[1] : [];
  } catch {
    return [];
  }
}

async function getChineseCedict(term) {
  if (!term || !/[\u3400-\u9fff]/.test(term)) return null;
  const url = `https://cdn.jsdelivr.net/gh/infinyte7/cedict-json/data/${encodeURIComponent(term)}.json`;
  try {
    const response = await fetch(url, { cache:"force-cache" });
    if (!response.ok) return null;
    const data = await response.json();
    return data || null;
  } catch {
    return null;
  }
}

async function searchDictionary() {
  const input = $("dictionaryInput");
  const source = $("dictionarySource").value;
  const term = input.value.trim().replace(/\s+/g, " ");
  const box = $("dictionaryResults");
  const status = $("dictionaryStatus");
  const requestId = ++dictionaryRequestId;

  if (!term) {
    box.innerHTML = `<div class="dictionary-status" id="dictionaryStatus"></div><div class="empty"><div class="empty-bear">🐻</div>${escapeHTML(UI[getUILang()].dictionaryEmpty || "Enter a word.")}</div>`;
    return;
  }

  status.textContent = getUILang() === "ko" ? "검색 중..." : getUILang() === "en" ? "Searching..." : "🔎 Đang tra cứu...";
  box.innerHTML = `<div class="dictionary-status" id="dictionaryStatus">${escapeHTML(status.textContent)}</div><div class="empty"><div class="empty-bear">📖</div>Loading...</div>`;

  const wiki = WIKTIONARY_WIKI[source] || "en";

  try {
    let pinyin = "";
    let cedict = null;

    if (source === "zh") {
      cedict = await getChineseCedict(term);
      if (cedict?.pinyin) {
        pinyin = Array.isArray(cedict.pinyin) ? cedict.pinyin.join(" · ") : String(cdict.pinyin);
      }
    }

    const api = `https://${wiki}.wiktionary.org/w/api.php?action=query&prop=extracts|info&explaintext=1&inprop=url&redirects=1&format=json&formatversion=2&origin=*&titles=${encodeURIComponent(term)}`;
    const res = await fetch(api, { headers:{ "Accept":"application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    if (requestId !== dictionaryRequestId) return;

    const page = data?.query?.pages?.[0];

    if (!page || page.missing) {
      const suggestions = await getDictionarySuggestions(term, source);
      if (requestId !== dictionaryRequestId) return;

      box.innerHTML = `
        <div class="dictionary-status" id="dictionaryStatus"></div>
        <div class="empty">
          <div class="empty-bear">🐻</div>
          ${getUILang() === "en" ? "No exact entry was found." : getUILang() === "ko" ? "정확한 사전 항목을 찾을 수 없습니다." : "Không tìm thấy mục từ chính xác."}
          ${suggestions.length ? `<div class="dictionary-suggestions">${suggestions.map(s => `<button class="dictionary-suggestion">${escapeHTML(s)}</button>`).join("")}</div>` : ""}
        </div>`;

      box.querySelectorAll(".dictionary-suggestion").forEach(btn => {
        btn.addEventListener("click", () => {
          $("dictionaryInput").value = btn.textContent;
          searchDictionary();
        });
      });
      return;
    }

    const extract = page.extract || "";
    const title = page.title || term;
    const sourceUrl = page.fullurl || `https://${wiki}.wiktionary.org/wiki/${encodeURIComponent(title.replaceAll(" ","_"))}`;

    // For Chinese, CC-CEDICT is used as a pronunciation/meaning supplement.
    let cedictDefs = "";
    if (cedict?.definitions) {
      const defs = Array.isArray(cdict.definitions) ? cdict.definitions : Object.values(cedict.definitions);
      cedictDefs = defs.flatMap(d => Array.isArray(d) ? d : String(d).split(";")).filter(Boolean).slice(0,8).join("; ");
    }

    const pronunciationBlock = (source === "zh" && pinyin)
      ? `<div class="dictionary-pronunciation">🔤 <strong>Pinyin:</strong> ${escapeHTML(pinyin)}</div>`
      : "";

    const supplement = cedictDefs
      ? `<div class="dictionary-pronunciation">📘 <strong>CC-CEDICT:</strong> ${escapeHTML(cedictDefs)}</div>`
      : "";

    const statusText = UI[getUILang()].dictionaryTitle || "Dictionary";

    box.innerHTML = `
      <div class="dictionary-status" id="dictionaryStatus">${escapeHTML(statusText)}</div>
      <div class="dictionary-result-head">
        <div>
          <h3 class="dictionary-word">${escapeHTML(title)}</h3>
          <div class="dictionary-meta">${escapeHTML(LANG[source].label)}</div>
        </div>
        <button class="small-btn" id="dictionarySpeak">🔊 ${escapeHTML(UI[getUILang()].speakWord || "Listen")}</button>
      </div>
      ${pronunciationBlock}
      ${supplement}
      <div class="dictionary-definition">${escapeHTML(extract || (cedictDefs ? cedictDefs : "No plain-text definition is available for this entry."))}</div>
      <div class="dictionary-source">
        Wiktionary · <a href="${sourceUrl}" target="_blank" rel="noopener noreferrer">Open entry</a>
        ${source === "zh" && cedict ? " · CC-CEDICT pronunciation/definitions" : ""}
      </div>
    `;

    $("dictionarySpeak").addEventListener("click", () => speakText(
      source === "zh" && pinyin ? title : title,
      source
    ));
  } catch (error) {
    if (requestId !== dictionaryRequestId) return;
    box.innerHTML = `
      <div class="empty">
        <div class="empty-bear">☁️</div>
        ${getUILang() === "en" ? "The dictionary could not be reached. Check your connection and try again." : getUILang() === "ko" ? "사전에 연결할 수 없습니다. 인터넷 연결을 확인하고 다시 시도하세요." : "Không thể kết nối tới từ điển. Hãy kiểm tra mạng rồi thử lại."}
      </div>`;
  }
}

function speakText(text, langCode) {
  if (typeof speechSynthesis === "undefined") {
    showToast("⚠️ Trình duyệt không hỗ trợ phát âm.");
    return;
  }

  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = LANG[langCode]?.speech || "en-US";
  utterance.rate = .82;
  speechSynthesis.speak(utterance);
}

$("dictionarySearchBtn").addEventListener("click", searchDictionary);
$("dictionaryInput").addEventListener("keydown", e => {
  if (e.key === "Enter") searchDictionary();
});
$("dictionarySource").addEventListener("change", () => {
  if ($("dictionaryInput").value.trim()) searchDictionary();
});


/* ---------- FREQUENCY 1000 BANK ---------- */

const FREQUENCY_1000 = {
  loaded:false,
  loading:false,
  data:[]
};

const FREQUENCY_URLS = {
  en:"https://raw.githubusercontent.com/bukowa/1000-common-words/master/English-1000-common.txt",
  ko:"https://raw.githubusercontent.com/bukowa/1000-common-words/master/Korean-1000-common.txt"
};

const FREQUENCY_TOPIC_OVERRIDES = {
  // Common function / language words
  "i":"daily","you":"communication","he":"people","she":"people","we":"people","they":"people",
  "this":"daily","that":"daily","these":"daily","those":"daily","what":"communication","who":"communication",
  "where":"travel","when":"time","why":"communication","how":"communication",
  // Study
  "book":"study","school":"study","student":"study","teacher":"study","class":"study","lesson":"study",
  "learn":"study","study":"study","read":"study","write":"study","word":"study","language":"study",
  // Work / economy
  "work":"work","job":"work","office":"work","company":"work","business":"economy","money":"economy",
  "market":"economy","price":"shopping","cost":"economy","pay":"shopping","buy":"shopping","sell":"shopping",
  // Food
  "food":"food","eat":"food","drink":"food","water":"food","bread":"food","rice":"food","meat":"food",
  "fish":"food","fruit":"food","cook":"food","meal":"food",
  // Home
  "home":"home","house":"home","room":"home","door":"home","window":"home","bed":"home","chair":"home",
  "kitchen":"home","wall":"home","floor":"home","clean":"home",
  // Travel
  "car":"travel","bus":"travel","train":"travel","plane":"travel","airport":"travel","station":"travel",
  "road":"travel","street":"travel","travel":"travel","trip":"travel","ticket":"travel","hotel":"travel",
  // Health
  "health":"health","doctor":"health","hospital":"health","medicine":"health","pain":"health","sick":"health",
  "body":"health","exercise":"health","disease":"health",
  // Time
  "time":"time","day":"time","week":"time","month":"time","year":"time","today":"time","tomorrow":"time",
  "yesterday":"time","morning":"time","evening":"time","night":"time","hour":"time","minute":"time",
  // Environment / science
  "nature":"environment","earth":"environment","water":"environment","air":"environment","weather":"environment",
  "rain":"environment","snow":"environment","sun":"environment","tree":"environment","flower":"environment",
  "science":"science","experiment":"science","energy":"science","temperature":"science",
  // Society / law
  "government":"society","state":"society","law":"society","right":"society","public":"society","country":"society",
  "society":"society","police":"society","war":"society","peace":"society",
  // Media / technology
  "computer":"technology","internet":"technology","phone":"technology","program":"technology","system":"technology",
  "technology":"technology","machine":"technology","music":"media","movie":"media","film":"media","game":"media",
  "news":"media","radio":"media","television":"media",
  // Emotions
  "happy":"emotion","sad":"emotion","love":"emotion","fear":"emotion","angry":"emotion","feel":"emotion",
  "hope":"emotion","worry":"emotion","smile":"emotion","laugh":"emotion"
};

const FREQUENCY_TOPIC_LABELS = {
  vi:{
    writing:"Viết & sử dụng",daily:"Cuộc sống",people:"Con người & gia đình",study:"Học tập",
    work:"Công việc",economy:"Kinh tế",shopping:"Mua sắm",food:"Ăn uống",health:"Sức khỏe",
    home:"Nhà cửa",travel:"Đi lại & du lịch",time:"Thời gian",environment:"Môi trường & thiên nhiên",
    society:"Xã hội",history:"Lịch sử & phát minh",exam:"Thi cử & học thuật",emotion:"Cảm xúc",
    communication:"Giao tiếp",mechanism:"Cấu tạo & nguyên lý",science:"Khoa học",media:"Truyền thông & giải trí",
    technology:"Công nghệ"
  },
  en:{
    writing:"Writing & use",daily:"Daily life",people:"People & family",study:"Study",
    work:"Work",economy:"Economy",shopping:"Shopping",food:"Food",health:"Health",
    home:"Home",travel:"Travel & transport",time:"Time",environment:"Environment & nature",
    society:"Society",history:"History & inventions",exam:"Exams & academic",emotion:"Emotions",
    communication:"Communication",mechanism:"Structure & principles",science:"Science",
    media:"Media & entertainment",technology:"Technology"
  },
  ko:{
    writing:"쓰기 및 사용",daily:"생활",people:"사람 및 가족",study:"학습",
    work:"직장",economy:"경제",shopping:"쇼핑",food:"음식",health:"건강",
    home:"집",travel:"여행 및 교통",time:"시간",environment:"환경 및 자연",
    society:"사회",history:"역사 및 발명",exam:"시험 및 학술",emotion:"감정",
    communication:"의사소통",mechanism:"구조 및 원리",science:"과학",media:"미디어 및 여가",
    technology:"기술"
  }
};

function frequencyTopicFromEnglish(word) {
  const w = String(word || "").toLowerCase().trim();
  if (FREQUENCY_TOPIC_OVERRIDES[w]) return FREQUENCY_TOPIC_OVERRIDES[w];

  // Ordered rules: specific domains first, generic words last.
  const rules = [
    ["exam", /\b(exam|test|answer|question|score|grade|pass|fail|result|argument|claim|reason|therefore|however|example|compare|analy[sz]e|conclusion|evidence)\b/],
    ["study", /\b(school|student|teacher|class|lesson|book|read|write|study|learn|language|word|grammar|library|course|college|university|paper|research|homework)\b/],
    ["work", /\b(work|job|office|company|employee|boss|meeting|career|salary|manager|worker|business)\b/],
    ["economy", /\b(money|market|economy|economic|price|cost|trade|industry|business|bank|tax|income|profit|loss|investment|budget|product|supply|demand)\b/],
    ["shopping", /\b(buy|sell|sale|shopping|store|shop|customer|order|payment|cash|card|discount|cheap|expensive|receipt|delivery)\b/],
    ["health", /\b(health|doctor|hospital|medicine|medical|pain|sick|ill|disease|body|heart|blood|exercise|treatment|patient|symptom|drug)\b/],
    ["food", /\b(food|eat|drink|meal|bread|rice|meat|fish|fruit|vegetable|cook|kitchen|restaurant|coffee|tea|salt|sugar)\b/],
    ["home", /\b(home|house|room|door|window|bed|chair|table|wall|floor|kitchen|bathroom|clean|garden|key|light|electric)\b/],
    ["travel", /\b(car|bus|train|plane|airplane|airport|station|road|street|travel|trip|ticket|hotel|tour|tourist|map|taxi|passport|visa|luggage)\b/],
    ["time", /\b(time|day|week|month|year|today|tomorrow|yesterday|morning|afternoon|evening|night|hour|minute|second|early|late|before|after|weekend)\b/],
    ["environment", /\b(nature|earth|air|weather|rain|snow|sun|wind|tree|flower|river|sea|ocean|mountain|animal|climate|pollution|energy|environment|water)\b/],
    ["science", /\b(science|scientist|experiment|research|energy|temperature|pressure|force|speed|weight|size|shape|material|chemical|physics|biology)\b/],
    ["society", /\b(government|state|nation|country|society|public|law|legal|right|police|war|peace|election|vote|citizen|community|culture|tradition|policy|system)\b/],
    ["technology", /\b(computer|internet|phone|smartphone|program|software|website|system|machine|technology|digital|data|file|code|app|screen)\b/],
    ["media", /\b(music|song|movie|film|game|news|radio|television|video|show|art|media|story|actor|camera)\b/],
    ["emotion", /\b(happy|sad|love|fear|anger|angry|feel|hope|worry|smile|laugh|excited|surprise|proud|shame|kind|beautiful|ugly)\b/],
    ["people", /\b(person|people|man|woman|boy|girl|child|family|mother|father|brother|sister|son|daughter|friend|parent|wife|husband|neighbor)\b/],
    ["communication", /\b(say|speak|talk|listen|hear|ask|answer|tell|explain|message|contact|conversation|hello|please|thanks|sorry|yes|no|name)\b/],
    ["writing", /\b(write|writing|pen|paper|letter|note|sign|contract|text|sentence|paragraph)\b/]
  ];

  for (const [topic, regex] of rules) {
    if (regex.test(w)) return topic;
  }
  return "daily";
}

async function loadFrequency1000() {
  if (FREQUENCY_1000.loaded || FREQUENCY_1000.loading) return;
  FREQUENCY_1000.loading = true;

  try {
    const [enRes, koRes] = await Promise.all([
      fetch(FREQUENCY_URLS.en, {cache:"force-cache"}),
      fetch(FREQUENCY_URLS.ko, {cache:"force-cache"})
    ]);

    if (!enRes.ok || !koRes.ok) throw new Error("frequency fetch failed");

    const [enText, koText] = await Promise.all([enRes.text(), koRes.text()]);
    const enWords = enText.split(/\r?\n/).map(x => x.trim()).filter(Boolean);
    const koWords = koText.split(/\r?\n/).map(x => x.trim()).filter(Boolean);

    const count = Math.min(1000, enWords.length, koWords.length);
    const records = [];

    for (let i = 0; i < count; i++) {
      const en = enWords[i];
      const ko = koWords[i];

      if (!en || !ko) continue;

      // Skip obviously malformed source artifacts and keep useful Korean tokens.
      if (ko.length > 80 || /^(웹툰|뉴토끼|구글검색)/.test(ko)) continue;

      const level = i < 250 ? "beginner"
        : i < 500 ? "basic"
        : i < 750 ? "intermediate"
        : "advanced";

      records.push({
        vi: "",
        en,
        ko,
        ru: "",
        zh: "",
        pinyin:"",
        topic:frequencyTopicFromEnglish(en),
        level,
        frequencyRank:i + 1,
        frequencyBank:true,
        frequencySourceLanguage:"en"
      });
    }

    FREQUENCY_1000.data = records;
    FREQUENCY_1000.loaded = true;
  } catch {
    FREQUENCY_1000.data = [];
  } finally {
    FREQUENCY_1000.loading = false;
  }
}

function getVisibleVocabulary() {
  if (currentTopic === "frequency1000" && FREQUENCY_1000.loaded) {
    return FREQUENCY_1000.data;
  }
  return vocabulary;
}

/* ---------- TOPICS ---------- */

function countTopicWords(dataset, topic) {
  if (topic === "all") return dataset.length;
  return dataset.filter(item => item.topic === topic).length;
}

function topicLabel(topic, lang) {
  if (TOPICS[topic]?.[lang]) return TOPICS[topic][lang];
  return TOPICS[topic]?.vi || topic;
}

function renderTopics() {
  const select = $("topicButtons");
  if (!select) return;

  const lang = getUILang();
  const availableTopics = [
    "all","frequency1000","writing","daily","people","study","work","economy","shopping",
    "food","health","home","travel","time","environment","society","history","exam",
    "emotion","communication","mechanism","science","media","technology"
  ];

  // HTML select is intentionally used here to keep the topic UI compact.
  select.innerHTML = availableTopics.map(topic => {
    const dataset = topic === "frequency1000" && FREQUENCY_1000.loaded
      ? FREQUENCY_1000.data
      : vocabulary;

    const count = topic === "frequency1000" && !FREQUENCY_1000.loaded
      ? 1000
      : countTopicWords(dataset, topic === "frequency1000" ? "all" : topic);

    const suffix = lang === "ko" ? ` · ${count}개 단어`
      : lang === "en" ? ` · ${count} words`
      : ` · ${count} từ`;

    return `<option value="${topic}">${escapeHTML(topicLabel(topic, lang) + suffix)}</option>`;
  }).join("");

  select.value = TOPICS[currentTopic] ? currentTopic : "all";

  // Replace the select safely by assigning one onchange handler.
  select.onchange = () => {
    currentTopic = select.value;

    if (currentTopic === "frequency1000") {
      renderFrequencyLoading();
      loadFrequency1000().then(() => {
        renderTopics();
        renderVocabulary();
      });
    } else {
      renderVocabulary();
    }
  };
}

/* ---------- LEVEL FILTER ---------- */

function renderLevels() {
  const select = $("levelButtons");
  if (!select) return;

  const lang = getUILang();
  const labels = LEVEL_LABELS[lang] || LEVEL_LABELS.vi;

  select.innerHTML = Object.keys(labels).map(level =>
    `<option value="${level}">${escapeHTML(labels[level])}</option>`
  ).join("");

  select.value = currentLevel;

  select.onchange = () => {
    currentLevel = select.value;
    renderVocabulary();
  };
}

/* ---------- VOCABULARY ---------- */

function currentTargetLanguage() {
  return state?.learningLanguage && LANG[state.learningLanguage]
    ? state.learningLanguage
    : "ko";
}

function currentNativeLanguage() {
  return state?.nativeLanguage && LANG[state.nativeLanguage]
    ? state.nativeLanguage
    : "vi";
}

function sourceWord(index) {
  const item = vocabulary[index];
  const native = currentNativeLanguage();
  return item[native] || item.vi || item.en || item.ko || item.ru || item.zh || "";
}

function targetWord(index) {
  const lang = currentTargetLanguage();
  return vocabulary[index][lang] || vocabulary[index].en || vocabulary[index].vi || "";
}

function renderFrequencyLoading() {
  const ui = UI[getUILang()];
  if (!$("vocabGrid")) return;
  $("vocabGrid").innerHTML = `
    <div class="empty">
      <div class="empty-bear">📚</div>
      ${escapeHTML(FREQUENCY_1000.loading ? ui.frequencyLoading : ui.frequencyError)}
    </div>`;
}

function getVerifiedNativeText(item, lang) {
  const value = item?.[lang];
  if (typeof value === "string" && value.trim()) {
    // Do not accept English-as-Vietnamese/Russian/Chinese placeholders.
    if (lang !== "en" && typeof item.en === "string" &&
        value.trim().toLowerCase() === item.en.trim().toLowerCase()) {
      return "";
    }
    return value.trim();
  }
  return "";
}

function frequencyBankCanUseNativeLanguage() {
  return currentNativeLanguage() === "en";
}

function renderVocabulary() {
  const query = $("searchInput")?.value.trim().toLowerCase() || "";
  const ui = UI[getUILang()];

  if (currentTopic === "frequency1000" && !FREQUENCY_1000.loaded) {
    renderFrequencyLoading();
    if (!FREQUENCY_1000.loading) loadFrequency1000().then(() => {
      renderTopics();
      renderVocabulary();
    });
    return;
  }

  const dataset = currentTopic === "frequency1000" ? FREQUENCY_1000.data : vocabulary;

  // The public Top-1000 bank currently has verified English/Korean source pairs.
  // It is never shown as Vietnamese/Russian/Chinese because that would be misleading.
  if (currentTopic === "frequency1000" && !frequencyBankCanUseNativeLanguage()) {
    const native = LANG[currentNativeLanguage()].label;
    $("vocabGrid").innerHTML = `
      <div class="empty vocabulary-integrity-notice">
        <div class="empty-bear">🌍</div>
        <strong>${getUILang()==="en" ? "Verified native-language translation is not available for this frequency bank yet." : getUILang()==="ko" ? "이 빈도 단어장에는 현재 선택한 모국어의 검증된 번역이 없습니다." : "Kho 1000 từ này hiện chưa có bản dịch được kiểm chứng cho ngôn ngữ mẹ đẻ đã chọn."}</strong>
        <p>${getUILang()==="en" ? "Choose English as your native/reference language to study the verified English → Korean bank. Your main multilingual vocabulary remains available normally." : getUILang()==="ko" ? "검증된 영어 → 한국어 단어장을 보려면 모국어를 영어로 선택하세요. 기본 다국어 단어장은 정상적으로 사용할 수 있습니다." : `Kho 1000 từ hiện có cặp gốc Anh → Hàn đã kiểm chứng. Muốn dùng kho này, hãy chọn English làm ngôn ngữ gốc. Kho từ vựng đa ngôn ngữ chính vẫn hoạt động bình thường.`}</p>
      </div>`;
    return;
  }

  const list = dataset
    .map((item,index) => ({item,index}))
    .filter(({item}) => {
      if (currentTopic !== "all" && currentTopic !== "frequency1000" && item.topic !== currentTopic) return false;
      const itemLevel = item.level || "basic";
      if (currentLevel !== "all" && itemLevel !== currentLevel) return false;
      if (!query) return true;

      return [item.vi,item.en,item.ko,item.ru,item.zh,item.pinyin || ""]
        .filter(Boolean)
        .some(value => String(value).toLowerCase().includes(query));
    });

  const nativeLang = currentNativeLanguage();
  const targetLang = currentTargetLanguage();
  const nativeMeta = LANG[nativeLang];
  const targetMeta = LANG[targetLang];

  if (!$("vocabGrid")) return;

  $("vocabGrid").innerHTML = list.length
    ? list.map(({item,index}) => {
        const learned = state?.learned.includes(index);
        const favorite = state?.favorites.includes(index);
        const verifiedSource = getVerifiedNativeText(item,nativeLang);
        const source = verifiedSource || (nativeLang === "en" ? (item.en || "") : "—");
        const verifiedTarget = getVerifiedNativeText(item,targetLang);
        const target = verifiedTarget || (targetLang === "en" ? (item.en || "") : item[targetLang] || "—");
        const pinyin = targetLang === "zh" ? (item.pinyin || "") : "";
        const topicLabelText = TOPICS[item.topic]?.[getUILang()] || item.topic || "";
        const levelLabel = LEVEL_LABELS[getUILang()]?.[item.level || "basic"] || item.level || "";

        return `
          <article class="vocab-card ${learned ? "learned" : ""}">
            <button class="fav-btn" data-fav="${index}">${favorite ? "⭐" : "☆"}</button>
            <span class="index">${item.frequencyRank ? "Top #" + item.frequencyRank : "#" + String(index+1).padStart(2,"0")} ${learned ? "✓" : ""}</span>
            <h3>${escapeHTML(source)}</h3>
            ${source === "—" && nativeLang !== "en" ? `<div class="vocab-translation-warning">${escapeHTML(ui.nativeTranslationMissing || "Native translation unavailable")}</div>` : ""}
            <div class="en">${escapeHTML(nativeMeta.label)} → ${escapeHTML(targetMeta.label)}</div>
            <div class="ko">${escapeHTML(target)}</div>
            ${pinyin ? `<div class="vocab-pinyin">Pinyin: ${escapeHTML(pinyin)}</div>` : ""}
            <div class="vocab-badges"><span class="topic-tag">${escapeHTML(topicLabelText)}</span><span class="level-tag">${escapeHTML(levelLabel)}</span></div>
            <div class="actions">
              <button class="secondary-btn" data-learn="${index}">${learned ? "✓" : ui.markLearned}</button>
              <button class="secondary-btn" data-speak="${index}">🔊 ${ui.speakWord}</button>
            </div>
          </article>`;
      }).join("")
    : `<div class="empty"><div class="empty-bear">🐻</div>${escapeHTML(langEmptyMessage())}</div>`;

  document.querySelectorAll("[data-fav]").forEach(btn => {
    btn.addEventListener("click", () => toggleFavorite(Number(btn.dataset.fav)));
  });

  document.querySelectorAll("[data-learn]").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.learn);

      // Frequency bank progress is intentionally kept out of the saved index set,
      // because its remote source can reorder. It can be studied, but progress is
      // saved only for the stable curated vocabulary bank.
      if (currentTopic === "frequency1000") {
        showToast("📚 Kho 1000 từ đang ở chế độ tham khảo.");
        return;
      }

      markLearned(index);
      renderVocabulary();
    });
  });

  document.querySelectorAll("[data-speak]").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.speak);
      if (currentTopic === "frequency1000") {
        const text = targetWord(index);
        speakText(text,targetLang);
      } else {
        speakWord(index);
      }
    });
  });
}

$("searchInput").addEventListener("input", renderVocabulary);

/* ---------- VOICES ---------- */

function getVoices() {
  return typeof speechSynthesis === "undefined" ? [] : speechSynthesis.getVoices();
}

function populateVoiceSelect() {
  const select = $("voiceSelect");
  if (!select) return;

  const lang = currentTargetLanguage();
  const locale = LANG[lang].speech.toLowerCase();
  const prefix = locale.split("-")[0];
  let voices = getVoices().filter(v => v.lang?.toLowerCase() === locale);

  if (!voices.length) voices = getVoices().filter(v => v.lang?.toLowerCase().startsWith(prefix));
  if (!voices.length) voices = getVoices();

  const saved = state?.voiceByLanguage?.[lang] || "";
  select.innerHTML = "";

  if (!voices.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = UI[getUILang()].voiceLoading;
    select.appendChild(option);
    return;
  }

  voices.forEach(voice => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} · ${voice.lang}`;
    select.appendChild(option);
  });

  const selected = voices.find(v => v.name === saved) || voices[0];
  select.value = selected.name;

  if (state) {
    state.voiceByLanguage[lang] = selected.name;
    saveState();
  }
}

function speakWord(index = null) {
  if (typeof speechSynthesis === "undefined") {
    showToast("⚠️ Trình duyệt không hỗ trợ phát âm.");
    return;
  }

  const useIndex = index === null ? flashIndex : index;
  const lang = currentTargetLanguage();
  const text = targetWord(useIndex);
  const voiceName = $("voiceSelect")?.value || state?.voiceByLanguage?.[lang] || "";

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = LANG[lang].speech;
  utterance.rate = 0.82;
  utterance.pitch = 1;

  const voice = getVoices().find(v => v.name === voiceName);
  if (voice) utterance.voice = voice;

  speechSynthesis.speak(utterance);
}

if (typeof speechSynthesis !== "undefined") {
  speechSynthesis.addEventListener("voiceschanged", populateVoiceSelect);
}

$("voiceSelect").addEventListener("change", () => {
  if (!requireLogin()) {
    populateVoiceSelect();
    return;
  }
  const lang = currentTargetLanguage();
  state.voiceByLanguage[lang] = $("voiceSelect").value;
  saveState();
});

$("voiceTest").addEventListener("click", () => speakWord(flashIndex));
$("flashSpeakBtn").addEventListener("click", e => {
  e.stopPropagation();
  speakWord(flashIndex);
});

/* ---------- STUDY TOPIC SELECTORS ---------- */

function renderStudyTopicOptions() {
  const selects = [$("flashTopic"), $("quizTopic"), $("typingTopic")].filter(Boolean);
  if (!selects.length) return;

  const lang = getUILang();
  const availableTopics = [
    "all","frequency1000","writing","daily","people","study","work","economy","shopping",
    "food","health","home","travel","time","environment","society","history","exam",
    "emotion","communication","mechanism","science","media","technology"
  ];

  const options = availableTopics.map(topic => {
    const label = topicLabel(topic, lang);
    return `<option value="${topic}">${escapeHTML(label)}</option>`;
  }).join("");

  selects.forEach(select => {
    select.innerHTML = options;
    select.value = studyTopic;
    select.onchange = () => {
      studyTopic = select.value;
      flashPosition = 0;
      quizRound = 0;
      typingRound = 0;
      if (select.id === "flashTopic") {
        flashIndex = randomStudyIndex();
        updateFlashcard();
      }
      if (select.id === "quizTopic") newQuiz();
      if (select.id === "typingTopic") newTyping();
      syncStudyTopicSelectors();
    };
  });
}

function syncStudyTopicSelectors() {
  [$("flashTopic"), $("quizTopic"), $("typingTopic")].forEach(select => {
    if (select) select.value = studyTopic;
  });
}

function getStudyIndexes() {
  if (studyTopic === "frequency1000" && FREQUENCY_1000.loaded) {
    // Frequency bank has no guaranteed stable link to the curated progress index,
    // so the study tools use the curated vocabulary bank for saved progress.
    return vocabulary.map((_, index) => index);
  }

  return vocabulary
    .map((item,index) => ({item,index}))
    .filter(({item}) => studyTopic === "all" || item.topic === studyTopic)
    .map(({index}) => index);
}

function randomStudyIndex(exclude = -1) {
  const pool = getStudyIndexes();
  if (!pool.length) return 0;

  const candidates = pool.length > 1 ? pool.filter(i => i !== exclude) : pool;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

/* ---------- FLASHCARDS ---------- */

function updateFlashcard() {
  const pool = getStudyIndexes();
  if (!pool.length) {
    $("flashNumber").textContent = "0 / 0";
    $("flashVi").textContent = "—";
    $("flashEn").textContent = "";
    $("flashKo").textContent = "";
    return;
  }

  if (!pool.includes(flashIndex)) {
    flashPosition = 0;
    flashIndex = pool[0];
  } else {
    flashPosition = pool.indexOf(flashIndex);
  }

  const item = vocabulary[flashIndex];
  const nativeLang = currentNativeLanguage();
  const targetLang = currentTargetLanguage();

  $("flashNumber").textContent = `${flashPosition + 1} / ${pool.length}`;
  $("flashVi").textContent = item[nativeLang] || item.vi || "";
  $("flashEn").textContent = item.en || "";
  $("flashKo").textContent = item[targetLang] || item.en || "";
  $("flashTargetLabel").textContent = LANG[targetLang].label;
  if ($("flashPinyin")) $("flashPinyin").textContent = targetLang === "zh" ? (item.pinyin || "") : "";
  $("flashcard").classList.remove("flipped");
  $("flashcard").classList.toggle(
    "flashcard-learned",
    !!state && state.learned.includes(flashIndex)
  );
  syncStudyLanguageFromProfile();
}

$("flashcard").addEventListener("click", () => $("flashcard").classList.toggle("flipped"));
$("flashPrev").addEventListener("click", () => {
  const pool = getStudyIndexes();
  if (!pool.length) return;
  const pos = Math.max(0, pool.indexOf(flashIndex));
  const nextPos = (pos - 1 + pool.length) % pool.length;
  flashIndex = pool[nextPos];
  flashPosition = nextPos;
  updateFlashcard();
});

$("flashNext").addEventListener("click", () => {
  const pool = getStudyIndexes();
  if (!pool.length) return;
  const pos = Math.max(0, pool.indexOf(flashIndex));
  const nextPos = (pos + 1) % pool.length;
  flashIndex = pool[nextPos];
  flashPosition = nextPos;
  updateFlashcard();
});
$("flashLearnedBtn")?.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();

  if (!state) {
    openAuth();
    showToast("🐻 Hãy đăng nhập để lưu từ đã học.");
    return;
  }

  const index = Number(flashIndex);
  if (!Number.isInteger(index) || !vocabulary[index]) {
    showToast("⚠️ Không xác định được từ hiện tại.");
    return;
  }

  // One source of truth: the same learned array used by Vocabulary,
  // Quiz and Typing.
  const alreadyLearned = state.learned.includes(index);

  if (!alreadyLearned) {
    state.learned.push(index);
    state.wrong = state.wrong.filter(i => i !== index);
    state.xp += 5;
    saveState();
    updateDashboard();
  }

  updateLearnedNavCount();
  renderLearnedVault();
  renderVocabulary();
  showToast("✅ Đã thêm từ này vào mục Từ đã học.");
});
/* ---------- QUIZ ---------- */

function newQuiz() {
  const pool = getStudyIndexes();
  if (!pool.length) return;

  quizIndex = randomStudyIndex();
  quizRound = quizRound >= pool.length ? 1 : quizRound + 1;
  quizAnswered = false;

  $("quizQuestion").textContent = sourceWord(quizIndex);
  $("quizCounter").textContent = `${quizRound} / ${pool.length}`;
  $("quizScore").textContent = quizCorrectCount;
  $("quizFeedback").textContent = "";

  const wrongs = pool
    .filter(i => i !== quizIndex)
    .sort(() => Math.random() - .5)
    .slice(0, Math.min(3, Math.max(0, pool.length - 1)))
    .map(i => targetWord(i));

  const answers = [targetWord(quizIndex), ...wrongs].sort(() => Math.random() - .5);

  $("quizAnswers").innerHTML = answers.map(answer =>
    `<button class="answer-btn">${escapeHTML(answer)}</button>`
  ).join("");

  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.addEventListener("click", () => checkQuiz(btn, btn.textContent));
  });
}

function checkQuiz(button, answer) {
  if (quizAnswered) return;
  if (!requireLogin()) return;

  quizAnswered = true;

  document.querySelectorAll(".answer-btn").forEach(btn => btn.disabled = true);

  const correct = targetWord(quizIndex);

  if (answer === correct) {
    button.classList.add("correct");
    quizCorrectCount++;
    addXP(10, false);
    markLearned(quizIndex);
    $("quizFeedback").textContent = "🎉 Chính xác! +10 XP";
    $("quizFeedback").style.color = "var(--success)";
  } else {
    button.classList.add("wrong");
    document.querySelectorAll(".answer-btn").forEach(btn => {
      if (btn.textContent === correct) btn.classList.add("correct");
    });
    addWrong(quizIndex);
    addXP(2, false);
    saveState();
    $("quizFeedback").textContent = `💡 ${correct}`;
    $("quizFeedback").style.color = "var(--danger)";
  }

  saveState();
  updateDashboard();
}




/* ---------- LEARNED WORDS VAULT ---------- */
function markLearned(index) {
  return markKnownWord(index);
}

function markKnownWord(index) {
  if (!requireLogin()) return false;
  if (!state.learned.includes(index)) {
    state.learned.push(index);
    state.wrong = state.wrong.filter(i => i !== index);
    addXP(5, false);
    saveState();
    updateDashboard();
  }
  renderLearnedVault();
  return true;
}

function updateLearnedNavCount() {
  const badge = $("learnedNavCount");
  if (badge) badge.textContent = state?.learned?.length || 0;
}

function renderLearnedVault() {
  const list = $("learnedVocabList");
  const pageCount = $("learnedPageCount");
  if (!list) return;

  const learned = (state?.learned || []).filter(index => vocabulary[index]);

  if (pageCount) pageCount.textContent = learned.length;
  updateLearnedNavCount();

  if (!learned.length) {
    list.innerHTML = `
      <div class="empty learned-empty">
        <div class="empty-bear">🐻</div>
        <strong>${
          getUILang() === "en" ? "No learned words yet." :
          getUILang() === "ko" ? "아직 학습한 단어가 없습니다." :
          "Chưa có từ nào được đánh dấu đã học."
        }</strong>
        <p>${
          getUILang() === "en" ? "Mark a word as learned in Vocabulary, Flashcards, Quiz or Typing." :
          getUILang() === "ko" ? "단어, 플래시카드, 퀴즈 또는 답 입력에서 학습 완료로 표시하세요." :
          "Hãy đánh dấu một từ là đã học trong Từ vựng, Flashcard, Trắc nghiệm hoặc Gõ đáp án."
        }</p>
      </div>`;
    return;
  }

  const native = currentNativeLanguage();
  const target = currentTargetLanguage();
  const ui = UI[getUILang()];

  list.innerHTML = learned.map(index => {
    const item = vocabulary[index];
    const source = getVerifiedNativeText(item, native) || item[native] || item.vi || item.en || "";
    const dest = getVerifiedNativeText(item, target) || item[target] || item.en || "";
    const pinyin = target === "zh" ? (item.pinyin || "") : "";
    const topic = TOPICS[item.topic]?.[getUILang()] || item.topic || "";
    const level = LEVEL_LABELS[getUILang()]?.[item.level || "basic"] || item.level || "";

    return `
      <article class="vocab-card learned">
        <span class="index">✓</span>
        <h3>${escapeHTML(source)}</h3>
        <div class="en">${escapeHTML(LANG[native].label)} → ${escapeHTML(LANG[target].label)}</div>
        <div class="ko">${escapeHTML(dest)}</div>
        ${pinyin ? `<div class="vocab-pinyin">Pinyin: ${escapeHTML(pinyin)}</div>` : ""}
        <div class="vocab-badges">
          <span class="topic-tag">${escapeHTML(topic)}</span>
          <span class="level-tag">${escapeHTML(level)}</span>
        </div>
        <div class="actions">
          <button class="primary-btn" data-review-learned="${index}">📖 ${
            getUILang() === "en" ? "Review" :
            getUILang() === "ko" ? "복습" : "Ôn tập"
          }</button>
          <button class="secondary-btn" data-unlearn="${index}">↩ ${
            getUILang() === "en" ? "Remove" :
            getUILang() === "ko" ? "학습 취소" : "Bỏ khỏi kho"
          }</button>
          <button class="secondary-btn" data-speak-known="${index}">🔊 ${ui.speakWord || "Nghe"}</button>
        </div>
      </article>`;
  }).join("");

  list.querySelectorAll("[data-review-learned]").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.reviewLearned);
      if (!vocabulary[index]) return;
      flashIndex = index;
      showPage("flashcard");
      updateFlashcard();
      window.scrollTo({ top:0, behavior:"smooth" });
    });
  });

  list.querySelectorAll("[data-unlearn]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!requireLogin()) return;
      const index = Number(btn.dataset.unlearn);
      state.learned = state.learned.filter(i => i !== index);
      saveState();
      updateDashboard();
      renderLearnedVault();
      renderVocabulary();
    });
  });

  list.querySelectorAll("[data-speak-known]").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.speakKnown);
      speakWord(index);
    });
  });
}

/* ---------- QUIZ NEXT BUTTON ---------- */
const nextQuizButton = $("nextQuiz");
if (nextQuizButton) {
  nextQuizButton.addEventListener("click", () => {
    newQuiz();
  });
}

/* ---------- TYPING ---------- */

function newTyping() {
  const pool = getStudyIndexes();
  if (!pool.length) return;

  typingIndex = randomStudyIndex();
  typingRound = typingRound >= pool.length ? 1 : typingRound + 1;
  typingChecked = false;

  $("typingQuestion").textContent = sourceWord(typingIndex);
  $("typingInput").value = "";
  $("typingFeedback").textContent = "";
  if ($("typingCounter")) $("typingCounter").textContent = `${typingRound} / ${pool.length}`;

  const countTarget = $("typingCounter");
  if (countTarget) countTarget.textContent = `${typingRound} / ${pool.length}`;
}

$("checkTyping").addEventListener("click", () => {
  if (typingChecked) return;
  if (!requireLogin()) return;

  typingChecked = true;
  const answer = normalizeText($("typingInput").value);
  const correct = normalizeText(targetWord(typingIndex));

  if (answer === correct) {
    addXP(10, false);
    markLearned(typingIndex);
    $("typingFeedback").textContent = "🎉 Chính xác! +10 XP";
    $("typingFeedback").style.color = "var(--success)";
  } else {
    addWrong(typingIndex);
    addXP(2, false);
    $("typingFeedback").textContent = `💡 ${targetWord(typingIndex)}`;
    $("typingFeedback").style.color = "var(--danger)";
  }

  saveState();
  updateDashboard();
});

$("typingInput").addEventListener("keydown", e => {
  if (e.key === "Enter") $("checkTyping").click();
});

$("nextTyping").addEventListener("click", newTyping);

/* ---------- WRONG WORDS ---------- */

function addWrong(index) {
  if (state && !state.wrong.includes(index)) state.wrong.push(index);
}

function renderWrong() {
  const box = $("wrongList");

  if (!state || !state.wrong.length) {
    box.innerHTML = `
      <div class="empty">
        <div class="empty-bear">🐻</div>
        ${getUILang() === "en" ? "No words to review." : getUILang() === "ko" ? "복습할 단어가 없습니다." : "Chưa có từ cần ôn."}
      </div>`;
    return;
  }

  box.innerHTML = state.wrong.map(index => vocabCardHTML(index)).join("");

  box.querySelectorAll("[data-fav]").forEach(btn => {
    btn.addEventListener("click", () => toggleFavorite(Number(btn.dataset.fav)));
  });

  box.querySelectorAll("[data-learn]").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.learn);
      markLearned(index);
      state.wrong = state.wrong.filter(i => i !== index);
      saveState();
      renderWrong();
    });
  });

  box.querySelectorAll("[data-speak]").forEach(btn => {
    btn.addEventListener("click", () => speakWord(Number(btn.dataset.speak)));
  });
}

function vocabCardHTML(index) {
  const item = vocabulary[index];
  const lang = currentTargetLanguage();
  const native = currentNativeLanguage();
  const learned = state?.learned.includes(index);
  const fav = state?.favorites.includes(index);

  return `
    <article class="vocab-card ${learned ? "learned" : ""}">
      <button class="fav-btn" data-fav="${index}">${fav ? "⭐" : "☆"}</button>
      <span class="index">#${String(index+1).padStart(2,"0")}</span>
      <h3>${escapeHTML(item[native])}</h3>
      <div class="en">${escapeHTML(LANG[native].label)}</div>
      <div class="ko">${escapeHTML(item[lang])}</div>
      <div class="actions">
        <button class="secondary-btn" data-learn="${index}">✓</button>
        <button class="secondary-btn" data-speak="${index}">🔊</button>
      </div>
    </article>`;
}

/* ---------- SETTINGS / THEME ---------- */

$("settingsAuthBtn").addEventListener("click", () => state ? logoutUser() : openAuth());

$("resetBtn").addEventListener("click", () => {
  if (!requireLogin()) return;
  if (!confirm("Bạn có chắc muốn xóa toàn bộ tiến trình học của tài khoản này?")) return;

  state.learned = [];
  state.favorites = [];
  state.wrong = [];
  state.xp = 0;
  saveState();
  refreshAll();
  showToast("🗑️ Đã xóa tiến trình.");
});

$("exportBtn").addEventListener("click", () => {
  if (!requireLogin()) return;

  const copy = {
    username:currentUsername,
    displayName:state.displayName,
    interfaceLanguage:state.interfaceLanguage,
    learningLanguage:state.learningLanguage,
    learningLevel:state.learningLevel,
    nativeLanguage:state.nativeLanguage,
    learned:state.learned,
    favorites:state.favorites,
    wrong:state.wrong,
    xp:state.xp,
    exportedAt:new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(copy,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${currentUsername}-studybear-progress.json`;
  a.click();
  URL.revokeObjectURL(url);
});

/* ---------- THEME ---------- */

function applyTheme() {
  document.body.classList.toggle("dark", !!state?.dark);
  $("darkButton").textContent = state?.dark ? "☀️" : "🌙";
}

$("darkButton").addEventListener("click", () => {
  if (!requireLogin()) return;
  state.dark = !state.dark;
  saveState();
  applyTheme();
});

/* ---------- DASHBOARD ---------- */

function updateDashboard() {
  const learned = state?.learned.length || 0;
  const favorites = state?.favorites.length || 0;
  const wrong = state?.wrong.length || 0;
  const xp = state?.xp || 0;
  const level = Math.floor(xp / 100) + 1;
  const percent = Math.round((learned / vocabulary.length) * 100);

  $("statLearned").textContent = learned;
  $("statFavorite").textContent = favorites;
  $("statScore").textContent = xp;
  $("statWrong").textContent = wrong;
  $("progressPercent").textContent = percent + "%";
  $("progressBar").style.width = percent + "%";
  $("learnedLabel").textContent = `${learned} / ${vocabulary.length}`;
  $("level").textContent = level;
  $("xp").textContent = xp;
  $("xpProgress").style.width = (xp % 100) + "%";

  $("heroGreeting").textContent = state
    ? `Chào ${state.displayName}! 🐻`
    : "Chào mừng bạn đến với StudyBear!";

  if ($("profileLevel") && state) updateProfileSummary();
}

function addXP(amount, save=true) {
  if (!state) return;
  state.xp += amount;
  if (save) {
    saveState();
    updateDashboard();
  }
}

/* ---------- HELPERS ---------- */

function normalizeText(text) {
  return String(text).trim().toLowerCase().replace(/\s+/g, " ");
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function refreshAll() {
  updateDashboard();
  updateLearnedNavCount();
  renderVocabulary();
  renderWrong();
  renderLearnedVault();
  renderProfile();
  syncStudyLanguageFromProfile();
  renderTopics();
  populateVoiceSelect();
}

/* ---------- START ---------- */
loadCurrentUser();
updateUserUI();
applyTheme();
applyInterfaceLanguage();
refreshAll();
renderTopics();
renderLevels();
renderStudyTopicOptions();
updateFlashcard();
newQuiz();
newTyping();
initSupabaseAuthBridge();

if (!currentUsername) {
  const guestLang = localStorage.getItem("studyBearGuestLanguage");
  if (UI[guestLang]) applyInterfaceLanguage();
  setTimeout(openAuth, 300);
}

/* ---------- SUPABASE STATUS BRIDGE (NON-BLOCKING) ---------- */
window.getStudyBearSupabaseStatus = function () {
  return {
    ready: Boolean(window.studyBearSupabaseReady && window.studyBearSupabase)
  };
};


/* ---------- SUPABASE SOCIAL: FRIENDS + CHAT + PRESENCE ---------- */
(function initStudyBearSocial() {
  const social = {
    conversations: [],
    activeConversationId: null,
    activeFriendId: null,
    messageChannel: null,
    friendshipChannel: null,
    profileChannel: null,
    presenceChannel: null,
    onlineIds: new Set(),
    booted: false,
    uiAbortController: null,
    sendBusy: false,
    typingChannel: null,
    typingTimeout: null,
    typingStopTimer: null,

    client() { return typeof getSupabaseClient === "function" ? getSupabaseClient() : null; },
    text(key, fallback) { return (typeof UI !== "undefined" && UI[getUILang()]?.[key]) || fallback; },

    async user() {
      const client=this.client();
      if (!client) return null;
      const {data:{user}}=await client.auth.getUser();
      return user || null;
    },

    async boot() {
      if (this.booted) return;
      this.booted=true;
      await this.bindPresence();
      await this.bindFriendshipRealtime();
      await this.bindProfileRealtime();
      this.bindUI();
    },

    bindUI() {
      // Bind once per boot. The chat form is also guarded outside the Social
      // module so native form navigation can never take the user home.
      $("friendSearchBtn")?.addEventListener("click",()=>this.searchFriends());

      $("friendSearchInput")?.addEventListener("keydown",e=>{
        if(e.key==="Enter"){
          e.preventDefault();
          this.searchFriends();
        }
      });

      $("chatForm")?.addEventListener("submit",e=>{
        e.preventDefault();
        e.stopImmediatePropagation();
        this.sendMessage();
      });

      $("chatInput")?.addEventListener("keydown",e=>{
        if(e.key==="Enter" && !e.shiftKey){
          e.preventDefault();
          e.stopImmediatePropagation();
          this.stopTypingBroadcast();
          this.sendMessage();
        }
      });

      $("chatInput")?.addEventListener("input",()=>{
        this.startTypingBroadcast();
      });

      $("chatInput")?.addEventListener("blur",()=>{
        this.stopTypingBroadcast();
      });
    },

    async onPage(page) {
      if (!this.client()) return;
      await this.boot();
      if (page==="friends") await this.renderFriends();
      if (page==="chat") await this.renderConversations();
    },

    async bindPresence() {
      const client=this.client();
      const user=await this.user();
      if (!client || !user || this.presenceChannel) return;
      this.presenceChannel=client.channel("studybear-presence", {config:{presence:{key:user.id}}});
      this.presenceChannel
        .on("presence",{event:"sync"},()=>{
          const state=this.presenceChannel.presenceState();
          const ids=new Set();
          Object.values(state||{}).forEach(entries=>entries.forEach(entry=>{if(entry?.user_id) ids.add(entry.user_id);}));
          this.onlineIds=ids;
          if(currentPage==="friends") this.renderFriends();
          if(currentPage==="chat") this.renderConversations();
          this.updateChatHeader();
        })
        .subscribe(async status=>{
          if(status==="SUBSCRIBED") await this.presenceChannel.track({user_id:user.id,online_at:new Date().toISOString()});
        });
    },

    async bindFriendshipRealtime() {
      const client=this.client();
      const user=await this.user();
      if(!client||!user||this.friendshipChannel) return;
      this.friendshipChannel=client
        .channel("studybear-friendships")
        .on("postgres_changes",{event:"*",schema:"public",table:"friendships"},()=>{
          this.renderFriends();
          this.updateRequestBadge();
        })
        .subscribe(status=>{
          if(status==="SUBSCRIBED"){
            console.info("[StudyBear] Friendship realtime ready.");
          }else if(status==="CHANNEL_ERROR"||status==="TIMED_OUT"){
            console.warn("[StudyBear] Friendship realtime:",status);
          }
        });
    },

    async searchFriends() {
      const client=this.client();
      const input=$("friendSearchInput");
      const results=$("friendSearchResults");
      const status=$("friendSearchStatus");
      if(!client||!input||!results) return;

      const q=normalizeUsername(String(input.value||"").trim());
      results.innerHTML="";

      if(q.length<2){
        if(status) status.textContent=this.text("friendSearchLabel","Nhập username để tìm.");
        return;
      }

      if(status) status.textContent=this.getUILabel("searching","Đang tìm...");

      try{
        // V53: one authoritative RPC returns BOTH profile and relationship.
        // This removes the race/failure caused by searching first and checking
        // friendship in a second independent RPC.
        const {data,error}=await client.rpc(
          "find_users_with_friendship_status",
          {p_query:q}
        );
        if(error) throw error;

        const rows=(Array.isArray(data)?data:[]).filter(x=>x?.id);

        if(!rows.length){
          results.innerHTML=`<div class="empty">🐻 ${escapeHTML(this.text("friendNoResults","Không tìm thấy người dùng."))}</div>`;
          if(status) status.textContent="";
          return;
        }

        results.innerHTML=rows.map(user=>this.friendCard({
          ...user,
          friendship_status:user.friendship_status||null,
          friendship_direction:user.friendship_direction||null,
          friendship_id:user.friendship_id||null,
          avatar_updated_at:user.avatar_updated_at||user.updated_at||null
        },"search")).join("");

        this.bindFriendCardButtons(results);
        this.bindPublicProfileButtons(results);
        if(status) status.textContent="";
      }catch(error){
        console.error("[StudyBear] Friend search error:",error);
        results.innerHTML=`<div class="empty">⚠️ ${escapeHTML(error.message||"Không thể tìm kiếm.")}</div>`;
        if(status) status.textContent="";
      }
    },

    getUILabel(key,fallback){
      const map={searching:{vi:"🔎 Đang tìm...",en:"🔎 Searching...",ko:"🔎 검색 중..."}};
      return map[key]?.[getUILang()]||fallback;
    },

    friendCard(user,mode){
      const targetId = String(user.friend_id || user.id || "").trim();
      const online=this.onlineIds.has(targetId);

      const rawAvatar = user.avatar_url || "";
      const avatarVersion = user.avatar_updated_at || user.updated_at || "";
      const avatarSrc = rawAvatar
        ? `${rawAvatar}${rawAvatar.includes("?") ? "&" : "?"}v=${encodeURIComponent(avatarVersion || Date.now())}`
        : "";
      const avatar=avatarSrc ? `<img src="${escapeHTML(avatarSrc)}" alt="">` : `🐻`;

      const status=online?this.text("online","Đang hoạt động"):this.text("offline","Ngoại tuyến");
      const relation=String(user.friendship_status || user.status || "").toLowerCase() || null;
      const direction=String(user.friendship_direction || user.direction || "").toLowerCase() || null;
      let action="";

      if(mode==="search"){
        if(relation==="accepted"){
          action=`<span class="social-state accepted">✓ ${escapeHTML(this.text("friendAccepted","Đã kết bạn"))}</span>
                  <button class="primary-btn" data-chat-user="${escapeHTML(targetId)}">💬 ${escapeHTML(this.text("friendChat","Nhắn tin"))}</button>`;
        }else if(relation==="pending" && direction==="outgoing"){
          action=`<button class="secondary-btn" disabled>⏳ ${escapeHTML(this.text("friendPending","Chờ phản hồi"))}</button>`;
        }else if(relation==="pending" && direction==="incoming"){
          action=`<button class="primary-btn" data-accept-friend="${escapeHTML(String(user.friendship_id||""))}">✅ ${escapeHTML(this.text("friendAccept","Chấp nhận"))}</button>`;
        }else{
          action=`<button class="secondary-btn" data-friend-add="${escapeHTML(targetId)}">➕ ${escapeHTML(this.text("friendAdd","Kết bạn"))}</button>`;
        }
      }

      if(mode==="friend"){
        action=`<span class="social-state accepted">✓ ${escapeHTML(this.text("friendAccepted","Đã kết bạn"))}</span>
                <button class="primary-btn" data-chat-user="${escapeHTML(targetId)}">💬 ${escapeHTML(this.text("friendChat","Nhắn tin"))}</button>
                <button class="secondary-btn" data-remove-friend="${escapeHTML(String(user.friendship_id||""))}">↩ ${escapeHTML(this.text("friendRemove","Xóa bạn"))}</button>`;
      }

      if(mode==="request"){
        action=`<button class="primary-btn" data-accept-friend="${escapeHTML(String(user.friendship_id||""))}">✅ ${escapeHTML(this.text("friendAccept","Chấp nhận"))}</button>
                <button class="secondary-btn" data-decline-friend="${escapeHTML(String(user.friendship_id||""))}">✕ ${escapeHTML(this.text("friendDecline","Từ chối"))}</button>`;
      }

      return `<div class="social-user-row">
        <button type="button" class="social-avatar social-profile-trigger" data-public-profile="${escapeHTML(targetId)}" title="Xem hồ sơ">${avatar}</button>
        <div class="social-user-main">
          <strong class="social-profile-trigger-text" data-public-profile="${escapeHTML(targetId)}">@${escapeHTML(user.username||"")}</strong>
          <span>${escapeHTML(user.display_name||user.username||"")}</span>
          <small><i class="presence-dot ${online?"online":"offline"}"></i>${escapeHTML(status)}</small>
        </div>
        <div class="social-user-actions">${action}</div>
      </div>`;
    },

    bindFriendCardButtons(root=document) {
      root.querySelectorAll?.("[data-friend-add]").forEach(btn=>btn.addEventListener("click",()=>this.sendRequest(btn.dataset.friendAdd)));
      root.querySelectorAll?.("[data-accept-friend]").forEach(btn=>btn.addEventListener("click",()=>this.respondRequest(Number(btn.dataset.acceptFriend),"accepted")));
      root.querySelectorAll?.("[data-decline-friend]").forEach(btn=>btn.addEventListener("click",()=>this.respondRequest(Number(btn.dataset.declineFriend),"declined")));
      root.querySelectorAll?.("[data-remove-friend]").forEach(btn=>btn.addEventListener("click",()=>this.removeFriend(Number(btn.dataset.removeFriend))));
      root.querySelectorAll?.("[data-chat-user]").forEach(btn=>btn.addEventListener("click",()=>this.openChatWith(btn.dataset.chatUser)));
    },

    bindPublicProfileButtons(root=document){
      root.querySelectorAll?.("[data-public-profile]").forEach(el=>{
        el.addEventListener("click",(event)=>{
          event.preventDefault();
          event.stopPropagation();
          this.openPublicProfile(el.dataset.publicProfile);
        });
      });
    },

    async openPublicProfile(userId){
      const client=this.client();
      if(!client) return;
      const id=String(userId||"").trim();
      if(!id || id==="undefined" || id==="null") return;

      try{
        const {data,error}=await client.rpc("get_public_profile",{p_user_id:id});
        if(error) throw error;
        const profile=Array.isArray(data)?data[0]:data;
        if(!profile) throw new Error("Không tìm thấy hồ sơ.");

        const overlay=$("publicProfileOverlay");
        if(!overlay) return;

        const avatar=$("publicProfileAvatar");
        const avatarUrl=profile.avatar_url
          ? `${profile.avatar_url}${profile.avatar_url.includes("?")?"&":"?"}v=${encodeURIComponent(profile.avatar_updated_at||Date.now())}`
          : "";
        if(avatar){
          avatar.innerHTML=avatarUrl?`<img src="${escapeHTML(avatarUrl)}" alt="">`:"🐻";
        }

        $("publicProfileName").textContent=profile.display_name||profile.username||"User";
        $("publicProfileUsername").textContent="@"+(profile.username||"");
        $("publicProfileBio").textContent=profile.bio || this.text("publicNoBio","Chưa có giới thiệu.");
        $("publicLearningLanguage").textContent=this.languageLabel(profile.learning_language);
        $("publicNativeLanguage").textContent=this.languageLabel(profile.native_language);
        $("publicLearningLevel").textContent=this.levelLabel(profile.learning_level);

        const status=$("publicProfileStatus");
        if(status){
          status.innerHTML=this.onlineIds.has(profile.id)
            ? `<span class="presence-dot online"></span>${escapeHTML(this.text("online","Đang hoạt động"))}`
            : `<span class="presence-dot offline"></span>${escapeHTML(this.text("offline","Ngoại tuyến"))}`;
        }

        const items=$("publicCollectionGrid");
        const collection=Array.isArray(profile.collection_items)?profile.collection_items:[];
        if(items){
          items.innerHTML=collection.length
            ? collection.map(item=>`
              <button type="button" class="public-collection-item" data-collection-item='${escapeHTML(JSON.stringify(item))}'>
                <span class="public-item-icon">${escapeHTML(item.icon||"🎁")}</span>
                <strong>${escapeHTML(item.name||"Item")}</strong>
                <small>${escapeHTML(item.season||item.theme||"Special")}</small>
              </button>`).join("")
            : `<div class="public-empty-collection">🎁 ${escapeHTML(this.text("publicCollectionEmpty","Chưa có vật phẩm trong bộ sưu tập."))}</div>`;

          items.querySelectorAll("[data-collection-item]").forEach(button=>{
            button.addEventListener("click",()=>{
              const raw=button.dataset.collectionItem;
              try{ this.openCollectionItem(JSON.parse(raw)); }catch(_){}
            });
          });
        }

        overlay.classList.add("open");
        overlay.setAttribute("aria-hidden","false");
      }catch(error){
        console.error("[StudyBear] openPublicProfile:",error);
        showToast(error.message||"Không thể mở hồ sơ.");
      }
    },

    languageLabel(code){
      const map={
        vi:{vi:"🇻🇳 Tiếng Việt",en:"🇬🇧 English",ko:"🇰🇷 한국어",ru:"🇷🇺 Русский",zh:"🇨🇳 中文"},
        en:{vi:"🇻🇳 Vietnamese",en:"🇬🇧 English",ko:"🇰🇷 Korean",ru:"🇷🇺 Russian",zh:"🇨🇳 Chinese"},
        ko:{vi:"🇻🇳 베트남어",en:"🇬🇧 영어",ko:"🇰🇷 한국어",ru:"🇷🇺 러시아어",zh:"🇨🇳 중국어"}
      };
      return map[getUILang()]?.[code] || map.vi[code] || code || "—";
    },

    levelLabel(level){
      const map={
        beginner:{vi:"Sơ cấp",en:"Beginner",ko:"초급"},
        basic:{vi:"Căn bản",en:"Basic",ko:"기초"},
        intermediate:{vi:"Trung cấp",en:"Intermediate",ko:"중급"},
        advanced:{vi:"Cao cấp",en:"Advanced",ko:"고급"},
        fluent:{vi:"Thông thạo",en:"Fluent",ko:"유창"}
      };
      return map[level]?.[getUILang()] || map[level]?.vi || level || "—";
    },

    closePublicProfile(){
      const overlay=$("publicProfileOverlay");
      if(!overlay) return;
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden","true");
    },

    openCollectionItem(item){
      const overlay=$("itemDetailOverlay");
      if(!overlay) return;
      $("itemDetailIcon").textContent=item.icon||"🎁";
      $("itemDetailName").textContent=item.name||"Item";
      $("itemDetailDescription").textContent=item.description||this.text("itemNoDescription","Chưa có mô tả.");
      $("itemDetailEffect").textContent=item.effect||this.text("itemNoEffect","Vật phẩm trang trí.");
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden","false");

      // Small visual feedback effect.
      const icon=$("itemDetailIcon");
      icon.classList.remove("item-pop");
      void icon.offsetWidth;
      icon.classList.add("item-pop");
    },

    closeCollectionItem(){
      const overlay=$("itemDetailOverlay");
      if(!overlay) return;
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden","true");
    },

    async sendRequest(targetId){
      const client=this.client(); if(!client) return;
      if(!await this.user()) {openAuth();return;}
      try{
        const {error}=await client.rpc("send_friend_request",{p_target_user_id:targetId});
        if(error) throw error;
        showToast(this.text("friendRequestSent","✅ Đã gửi lời mời"));
        await this.renderFriends();
        await this.searchFriends();
      }catch(error){
        console.error(error);
        const msg=String(error?.message||"");
        if(/REQUEST_EXISTS|already|duplicate|unique/i.test(msg)){
          showToast(this.text("friendRequestExists","⏳ Đang chờ phản hồi hoặc hai bạn đã là bạn"));
          await this.searchFriends();
          return;
        }
        showToast(msg||"Không thể gửi lời mời.");
      }
    },

    async respondRequest(id,status){
      const client=this.client(); if(!client) return;
      try{
        const {error}=await client.rpc("respond_friend_request",{p_friendship_id:id,p_status:status});
        if(error) throw error;
        await this.renderFriends();
      }catch(error){console.error(error);showToast(error.message||"Không thể cập nhật lời mời.");}
    },

    async removeFriend(id){
      const client=this.client(); if(!client) return;
      try{
        const {error}=await client.rpc("remove_friend",{p_friendship_id:id});
        if(error) throw error;
        await this.renderFriends();
      }catch(error){console.error(error);showToast(error.message||"Không thể xóa bạn.");}
    },

    async renderFriends(){
      const client=this.client();
      if(!client) return;
      if(currentPage!=="friends"&&currentPage!=="home") return;

      try{
        const {data,error}=await client.rpc("get_my_friendships");
        if(error) throw error;

        let rows=(data||[]).map(x=>({
          ...x,
          friend_id: x.friend_id || x.id || null,
          username: x.username || x.friend_username || "",
          display_name: x.display_name || x.friend_display_name || "",
          avatar_url: x.avatar_url || "",
          avatar_updated_at: x.avatar_updated_at || x.updated_at || null
        }));

        // Fallback: when an older SQL function or stale schema returns an incomplete
        // row, hydrate names/avatar directly through one secure RPC call.
        const missingIds=rows
          .filter(x=>x.friend_id && (!x.username || !x.display_name))
          .map(x=>x.friend_id);

        if(missingIds.length){
          const uniqueIds=[...new Set(missingIds)];
          const {data:profiles,error:profileError}=await client.rpc(
            "get_friend_profiles",
            {p_user_ids:uniqueIds}
          );

          if(!profileError && profiles){
            const byId=new Map(profiles.map(p=>[String(p.id),p]));
            rows=rows.map(x=>{
              const p=byId.get(String(x.friend_id));
              return p ? {
                ...x,
                username:x.username || p.username || "",
                display_name:x.display_name || p.display_name || "",
                avatar_url:x.avatar_url || p.avatar_url || "",
                avatar_updated_at:x.avatar_updated_at || p.updated_at || null
              } : x;
            });
          }
        }

        const incoming=rows.filter(x=>x.status==="pending"&&x.direction==="incoming");
        const accepted=rows.filter(x=>x.status==="accepted");

        $("friendRequestsList") && (
          $("friendRequestsList").innerHTML=incoming.length
            ? incoming.map(x=>this.friendCard({...x,friendship_status:x.status},"request")).join("")
            : `<div class="empty">${escapeHTML(this.text("requestEmpty","Không có lời mời nào."))}</div>`
        );

        $("friendsList") && (
          $("friendsList").innerHTML=accepted.length
            ? accepted.map(x=>this.friendCard({...x,friendship_status:x.status},"friend")).join("")
            : `<div class="empty">${escapeHTML(this.text("friendEmpty","Chưa có bạn bè."))}</div>`
        );

        this.bindFriendCardButtons($("friendRequestsList"));
        this.bindFriendCardButtons($("friendsList"));
        this.bindPublicProfileButtons($("friendRequestsList"));
        this.bindPublicProfileButtons($("friendsList"));

        this.friendCount=accepted.length;
        this.friendRequestCount=incoming.length;
        const friendCountBadge=$("friendCount");
        if(friendCountBadge) friendCountBadge.textContent=String(accepted.length);
        this.updateRequestBadge(incoming.length);
      }catch(error){
        console.error("[StudyBear] renderFriends",error);
        const empty=`<div class="empty">⚠️ ${escapeHTML(error.message||"Không thể tải bạn bè.")}</div>`;
        $("friendRequestsList") && ($("friendRequestsList").innerHTML=empty);
      }
    },

    updateRequestBadge(count){
      const badge=$("friendRequestCount");
      if(badge) badge.textContent=String(count ?? this.friendRequestCount ?? 0);
    },

    async openChatWith(friendId){
      const client=this.client();
      if(!client) return;

      friendId = String(friendId || "").trim();
      if(!friendId || friendId === "undefined" || friendId === "null"){
        console.error("[StudyBear] Invalid friend id:", friendId);
        showToast("⚠️ Không xác định được người bạn để nhắn tin.");
        return;
      }

      const user=await this.user();
      if(!user){openAuth();return;}

      try{
        // Server-side RPC verifies that both users are accepted friends and
        // returns one stable direct conversation.
        const {data,error}=await client.rpc("get_or_create_direct_conversation",{p_other_user_id:friendId});
        if(error) throw error;

        const id=Number(data);
        if(!Number.isInteger(id) || id<=0) throw new Error("Không tạo được cuộc trò chuyện.");

        showPage("chat");
        await this.renderConversations();

        // The freshly-created conversation may not yet be in the list returned
        // by the query on a very fast connection, so select it directly.
        this.activeConversationId=id;
        this.activeFriendId=friendId;
        await this.selectConversation(id);
        showToast(this.text("chatReady","💬 Đã mở cuộc trò chuyện."));
      }catch(error){
        console.error("[StudyBear] openChatWith",error);
        showToast(error.message||this.text("chatNeedFriend","Hãy kết bạn trước khi trò chuyện."));
      }
    },

    async renderConversations(){
      const client=this.client(); if(!client) return;
      try{
        const {data,error}=await client.rpc("get_my_direct_conversations");
        if(error) throw error;
        this.conversations=data||[];
        $("conversationCount") && ($("conversationCount").textContent=String(this.conversations.length));
        const list=$("conversationList"); if(!list) return;
        list.innerHTML=this.conversations.length?this.conversations.map(c=>{
          const online=this.onlineIds.has(c.friend_id);
          const avatarSrc = c.avatar_url
            ? `${c.avatar_url}${c.avatar_url.includes("?") ? "&" : "?"}v=${encodeURIComponent(c.avatar_updated_at || Date.now())}`
            : "";
          const avatar=avatarSrc?`<img src="${escapeHTML(avatarSrc)}" alt="">`:`🐻`;
          return `<button class="conversation-item ${Number(c.conversation_id)===Number(this.activeConversationId)?"active":""}" data-conversation="${c.conversation_id}"><span class="social-avatar small">${avatar}</span><span class="conversation-main"><strong>${escapeHTML(c.display_name||c.username||"")}</strong><small>@${escapeHTML(c.username||"")}</small><em>${escapeHTML(c.last_message||"")}</em></span><i class="presence-dot ${online?"online":"offline"}"></i></button>`;
        }).join(""):`<div class="empty">🐻 ${escapeHTML(this.text("chatEmpty","Chưa có cuộc trò chuyện."))}</div>`;
        list.querySelectorAll("[data-conversation]").forEach(btn=>btn.addEventListener("click",()=>this.selectConversation(Number(btn.dataset.conversation))));
        if(this.activeConversationId && !this.conversations.some(c=>Number(c.conversation_id)===Number(this.activeConversationId))) this.activeConversationId=null;
        if(!this.activeConversationId && this.conversations[0]) await this.selectConversation(Number(this.conversations[0].conversation_id));
        else this.updateChatHeader();
      }catch(error){
        console.error("[StudyBear] renderConversations",error);
        $("conversationList") && ($("conversationList").innerHTML=`<div class="empty">⚠️ ${escapeHTML(error.message||"Không thể tải cuộc trò chuyện.")}</div>`);
      }
    },

    async selectConversation(id){
      const client=this.client(); if(!client) return;
      await this.stopTypingBroadcast();
      this.activeConversationId=id;
      const row=this.conversations.find(c=>Number(c.conversation_id)===Number(id));
      this.activeFriendId=row?.friend_id||null;
      this.updateChatHeader();
      await this.loadMessages();
      await this.subscribeMessages();
      this.renderConversations();
      setTimeout(()=>$("chatInput")?.focus(),50);
    },

    updateChatHeader(){
      const row=this.conversations.find(c=>Number(c.conversation_id)===Number(this.activeConversationId));
      const name=$("chatUserName"), status=$("chatUserStatus"), avatar=$("chatUserAvatar");
      if(!row){if(name)name.textContent=this.text("selectFriendToChat","Chọn một người bạn để bắt đầu"); if(status)status.textContent=""; if(avatar)avatar.textContent="🐻"; return;}
      if(name)name.textContent=`${row.display_name||row.username}`;
      if(status)status.textContent=this.onlineIds.has(row.friend_id)?this.text("online","Đang hoạt động"):this.text("offline","Ngoại tuyến");
      if(avatar){
        const avatarSrc = row.avatar_url
          ? `${row.avatar_url}${row.avatar_url.includes("?") ? "&" : "?"}v=${encodeURIComponent(row.avatar_updated_at || Date.now())}`
          : "";
        avatar.innerHTML=avatarSrc?`<img src="${escapeHTML(avatarSrc)}" alt="">`:"🐻";
      }
    },

    async loadMessages(){
      const client=this.client();
      const box=$("chatMessages");
      if(!client||!box||!this.activeConversationId)return;

      const {data,error}=await client
        .from("messages")
        .select("id,conversation_id,sender_id,content,created_at,read_at")
        .eq("conversation_id",this.activeConversationId)
        .order("created_at",{ascending:true});

      if(error){
        box.innerHTML=`<div class="empty">⚠️ ${escapeHTML(error.message)}</div>`;
        return;
      }

      if(!data?.length){
        box.innerHTML=`<div class="empty">${escapeHTML(this.text("chatEmpty","Chưa có tin nhắn."))}</div>`;
        await this.markConversationRead();
        return;
      }

      const user=await this.user();
      box.innerHTML=data.map(m=>this.messageHTML(m,user?.id)).join("");
      box.scrollTop=box.scrollHeight;

      await this.markConversationRead();
      this.updateAllMessageStatuses();
    },

    messageHTML(m,userId){
      const own=String(m.sender_id)===String(userId);
      const t=new Date(m.created_at).toLocaleTimeString(
        getUILang()==="ko"?"ko-KR":getUILang()==="en"?"en-US":"vi-VN",
        {hour:"2-digit",minute:"2-digit"}
      );
      const status=own
        ? `<span class="message-meta-status" data-read-at="${escapeHTML(m.read_at||"")}">${m.read_at?"✓✓ Đã xem":"✓ Đã gửi"}</span>`
        : "";

      return `<div class="chat-row ${own?"own":"friend"}" data-message-id="${escapeHTML(String(m.id))}">
        <div class="chat-bubble">
          <span>${escapeHTML(m.content)}</span>
          <small>${t} ${status}</small>
        </div>
      </div>`;
    },

    updateMessageStatus(messageId,readAt){
      const row=$(`chatMessages`)?.querySelector(`[data-message-id="${CSS.escape(String(messageId))}"]`);
      if(!row)return;
      const el=row.querySelector(".message-meta-status");
      if(!el)return;
      el.dataset.readAt=readAt||"";
      el.textContent=readAt?"✓✓ Đã xem":"✓ Đã gửi";
    },

    updateAllMessageStatuses(){
      const box=$("chatMessages");
      if(!box)return;
      box.querySelectorAll("[data-message-id]").forEach(row=>{
        const status=row.querySelector(".message-meta-status");
        if(!status)return;
        const readAt=status.dataset.readAt||"";
        status.textContent=readAt?"✓✓ Đã xem":"✓ Đã gửi";
      });
    },

    async markConversationRead(){
      const client=this.client();
      const id=Number(this.activeConversationId);
      if(!client||!Number.isInteger(id)||id<=0)return;
      try{
        await client.rpc("mark_conversation_read",{p_conversation_id:id});
      }catch(error){
        console.warn("[StudyBear] markConversationRead:",error);
      }
    },

    async subscribeMessages(){
      const client=this.client();
      if(!client||!this.activeConversationId)return;

      if(this.messageChannel){
        await client.removeChannel(this.messageChannel);
        this.messageChannel=null;
      }

      const conversationId=Number(this.activeConversationId);
      const user=await this.user();

      this.messageChannel=client.channel(`studybear-chat-${conversationId}`,{
        config:{broadcast:{self:false}}
      });

      this.messageChannel
        .on(
          "postgres_changes",
          {
            event:"INSERT",
            schema:"public",
            table:"messages",
            filter:`conversation_id=eq.${conversationId}`
          },
          async payload=>{
            const box=$("chatMessages");
            if(!box)return;

            const id=String(payload.new.id);
            if(box.querySelector(`[data-message-id="${CSS.escape(id)}"]`))return;

            const wrapper=document.createElement("div");
            wrapper.innerHTML=this.messageHTML(payload.new,user?.id);
            const node=wrapper.firstElementChild;
            if(node){
              if(box.querySelector(".empty"))box.innerHTML="";
              box.appendChild(node);
              box.scrollTop=box.scrollHeight;
            }

            // If the message arrived while the recipient is viewing this chat,
            // acknowledge it immediately.
            if(String(payload.new.sender_id)!==String(user?.id||"")){
              await this.markConversationRead();
            }
            this.renderConversations();
          }
        )
        .on(
          "postgres_changes",
          {
            event:"UPDATE",
            schema:"public",
            table:"messages",
            filter:`conversation_id=eq.${conversationId}`
          },
          payload=>{
            this.updateMessageStatus(payload.new.id,payload.new.read_at||"");
          }
        )
        .on(
          "broadcast",
          {event:"typing"},
          payload=>{
            const senderId=payload?.payload?.user_id;
            if(!senderId || String(senderId)===String(user?.id||""))return;

            const isTyping=Boolean(payload?.payload?.isTyping);
            const statusEl=$("chatStatus");
            if(!statusEl)return;

            clearTimeout(this.typingTimeout);

            if(isTyping){
              statusEl.textContent=this.text("typingNow","💬 Đang nhập tin nhắn...");
              this.typingTimeout=setTimeout(()=>{
                if(statusEl.textContent===this.text("typingNow","💬 Đang nhập tin nhắn...")){
                  statusEl.textContent="";
                }
              },2200);
            }else{
              statusEl.textContent="";
            }
          }
        )
        .subscribe(status=>{
          if(status==="SUBSCRIBED"){
            console.info("[StudyBear] Message realtime ready.");
          }else if(status==="CHANNEL_ERROR"||status==="TIMED_OUT"){
            console.warn("[StudyBear] Message realtime:",status);
          }
        });

      await this.markConversationRead();
    },

    async startTypingBroadcast(){
      const client=this.client();
      const input=$("chatInput");
      const conversationId=Number(this.activeConversationId);
      const user=await this.user();

      if(!client||!input||!Number.isInteger(conversationId)||conversationId<=0||!user||!input.value.trim()){
        return;
      }

      if(!this.messageChannel) return;

      clearTimeout(this.typingStopTimer);

      try{
        await this.messageChannel.send({
          type:"broadcast",
          event:"typing",
          payload:{user_id:user.id,isTyping:true}
        });
      }catch(error){
        console.warn("[StudyBear] typing broadcast:",error);
      }

      this.typingStopTimer=setTimeout(()=>this.stopTypingBroadcast(),1800);
    },

    async stopTypingBroadcast(){
      clearTimeout(this.typingStopTimer);
      const user=await this.user();
      if(!this.messageChannel||!user)return;

      try{
        await this.messageChannel.send({
          type:"broadcast",
          event:"typing",
          payload:{user_id:user.id,isTyping:false}
        });
      }catch(_){}
    },

    async sendMessage(){
      const client=this.client();
      const input=$("chatInput");
      if(!client || !input || !this.activeConversationId) return;
      if(this.sendBusy) return;

      const content=input.value.trim();
      if(!content) return;

      const user=await this.user();
      if(!user){openAuth();return;}

      this.sendBusy=true;
      input.disabled=true;
      const original=content;
      input.value="";

      try{
        const {data,error}=await client
          .from("messages")
          .insert({
            conversation_id:Number(this.activeConversationId),
            sender_id:user.id,
            content:original
          })
          .select("id,conversation_id,sender_id,content,created_at,read_at")
          .single();

        if(error) throw error;

        // The Realtime INSERT is the primary renderer. A delayed fallback only
        // renders when the authoritative message is still missing from the DOM.
        const box=$("chatMessages");
        const addIfMissing=()=>{
          if(!box || !data) return;
          const wanted=String(data.id);
          if([...box.querySelectorAll("[data-message-id]")].some(
            n => String(n.dataset.messageId)===wanted
          )) return;
          const wrapper=document.createElement("div");
          wrapper.innerHTML=this.messageHTML(data,user.id);
          const node=wrapper.firstElementChild;
          if(node){
            if(box.querySelector(".empty")) box.innerHTML="";
            box.appendChild(node);
            box.scrollTop=box.scrollHeight;
          }
        };
        setTimeout(addIfMissing,600);

        await this.renderConversations();
      }catch(error){
        console.error("[StudyBear] sendMessage",error);
        showToast(error.message||"Không thể gửi tin nhắn.");
        input.value=original;
      }finally{
        this.sendBusy=false;
        input.disabled=false;
        input.focus();
      }
    },

    cleanup(){
      const client=this.client();
      if(client&&this.messageChannel) client.removeChannel(this.messageChannel);
      if(client&&this.friendshipChannel) client.removeChannel(this.friendshipChannel);
      if(client&&this.profileChannel) client.removeChannel(this.profileChannel);
      if(client&&this.presenceChannel) client.removeChannel(this.presenceChannel);
      clearTimeout(this.typingTimeout);
      clearTimeout(this.typingStopTimer);
      this.messageChannel=this.friendshipChannel=this.profileChannel=this.presenceChannel=null;
      this.typingChannel=null;
      if(this.uiAbortController){
        try{ this.uiAbortController.abort(); }catch(_){}
        this.uiAbortController=null;
      }
      this.sendBusy=false;
      this.booted=false;
    }
  };

  // Fix the property typo above safely at runtime without touching the rest of StudyBear.
  social.text=function(key,fallback){return (typeof UI!=='undefined' && UI[getUILang()]?.[key]) || fallback;};
  window.StudyBearSocial=social;

})();



/* ---------- V50 SOCIAL FALLBACK BRIDGE ---------- */
(function installStudyBearSocialFallback(){
  let bound=false;

  function bindWhenReady(){
    if(bound || !document.getElementById("friendSearchBtn")) return;
    bound=true;

    const btn=document.getElementById("friendSearchBtn");
    const input=document.getElementById("friendSearchInput");
    const results=document.getElementById("friendSearchResults");
    const status=document.getElementById("friendSearchStatus");

    btn.addEventListener("click", async function(e){
      e.preventDefault();
      e.stopImmediatePropagation();

      const client=window.studyBearSupabase;
      if(!client){
        if(status) status.textContent="⚠️ Đang kết nối Supabase...";
        return;
      }

      const q=String(input?.value||"").trim().toLowerCase().replace(/\s+/g,"");
      if(q.length<2){
        if(status) status.textContent="Nhập ít nhất 2 ký tự username.";
        if(results) results.innerHTML="";
        return;
      }

      if(status) status.textContent="🔎 Đang tìm...";
      if(results) results.innerHTML="";

      try{
        const {data,error}=await client.rpc("find_users_for_friend_search",{p_query:q});
        if(error) throw error;

        const users=(Array.isArray(data)?data:[]).filter(x=>x?.id);
        if(!users.length){
          if(results) results.innerHTML='<div class="empty">🐻 Không tìm thấy người dùng.</div>';
          if(status) status.textContent="";
          return;
        }

        results.innerHTML=users.map(u=>{
          const avatar=u.avatar_url
            ? `<img src="${String(u.avatar_url).replace(/"/g,"&quot;")}?v=${encodeURIComponent(u.updated_at||"")}" alt="">`
            : "🐻";
          return `<div class="social-user-row" data-fallback-user="${u.id}">
            <div class="social-avatar">${avatar}</div>
            <div class="social-user-main">
              <strong>@${String(u.username||"").replace(/</g,"&lt;")}</strong>
              <span>${String(u.display_name||u.username||"").replace(/</g,"&lt;")}</span>
            </div>
            <div class="social-user-actions">
              <button type="button" class="primary-btn" data-fallback-add="${u.id}">➕ Kết bạn</button>
            </div>
          </div>`;
        }).join("");

        results.querySelectorAll("[data-fallback-add]").forEach(addBtn=>{
          addBtn.addEventListener("click",()=>{
            const id=addBtn.getAttribute("data-fallback-add");
            if(window.StudyBearSocial?.sendRequest) window.StudyBearSocial.sendRequest(id);
            else if(status) status.textContent="Đang khởi động chức năng kết bạn, hãy thử lại sau một giây.";
          });
        });

        // Let the normal Social renderer replace these basic cards when ready.
        if(window.StudyBearSocial?.bindFriendCardButtons) {
          window.StudyBearSocial.bindFriendCardButtons(results);
        }
        if(status) status.textContent="";
      }catch(err){
        console.error("[StudyBear] fallback friend search failed",err);
        if(status) status.textContent="";
        if(results) results.innerHTML=`<div class="empty">⚠️ ${String(err.message||"Không thể tìm kiếm.").replace(/</g,"&lt;")}</div>`;
      }
    }, {capture:true});
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",bindWhenReady,{once:true});
  }else{
    bindWhenReady();
  }
})();


/* ---------- V50 CHAT NAVIGATION GUARD ---------- */
(function installStudyBearChatGuard(){
  function bind(){
    const form=document.getElementById("chatForm");
    if(!form || form.dataset.v50Guard==="1") return;
    form.dataset.v50Guard="1";

    form.addEventListener("submit", function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      const input=document.getElementById("chatInput");
      const content=String(input?.value||"").trim();
      if(!content) return;

      const social=window.StudyBearSocial;
      if(social && typeof social.sendMessage==="function"){
        social.sendMessage();
      }else{
        const status=document.getElementById("chatStatus");
        if(status) status.textContent="Đang kết nối tin nhắn, vui lòng thử lại.";
      }
    }, {capture:true});
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",bind,{once:true});
  else bind();
})();


/* ---------- V52 CHAT FORM GLOBAL GUARD ---------- */
(function installV52ChatFormGuard(){
  function bind(){
    const form=document.getElementById("chatForm");
    if(!form || form.dataset.v52Guard==="1")return;
    form.dataset.v52Guard="1";
    form.addEventListener("submit",e=>{
      e.preventDefault();
      e.stopImmediatePropagation();
      const social=window.StudyBearSocial;
      if(social?.sendMessage) social.sendMessage();
    },{capture:true});
  }
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",bind,{once:true});
  }else{
    bind();
  }
})();

/* ---------- SOCIAL STARTUP BRIDGE ---------- */
let studyBearSupabaseReadyPoll = setInterval(() => {
  if (window.studyBearSupabaseReady && window.StudyBearSocial) {
    window.StudyBearSocial.boot().catch(error => console.warn("[StudyBear] Social boot skipped:", error));
    clearInterval(studyBearSupabaseReadyPoll);
  }
}, 250);
setTimeout(() => clearInterval(studyBearSupabaseReadyPoll), 15000);

/* ---------- FRIEND SEARCH DIAGNOSTIC ---------- */
window.studyBearSearchDiagnostic = async function (username) {
  try {
    const client = window.StudyBearSocial?.client?.();
    if (!client) return { ok:false, error:"Supabase client unavailable" };
    const q = normalizeUsername(username);
    const rpc = await client.rpc("search_profiles",{p_query:q});
    const direct = await client.from("profiles")
      .select("id,username,display_name,avatar_url,updated_at")
      .ilike("username", `%${q}%`)
      .limit(20);
    return {
      query:q,
      rpcError:rpc.error?.message || null,
      rpcRows:rpc.data || [],
      directError:direct.error?.message || null,
      directRows:direct.data || []
    };
  } catch (error) {
    return { ok:false, error:error.message };
  }
};

/* ---------- V46 FRIEND SEARCH DIAGNOSTIC ---------- */
window.studyBearSearchYanlinh = async function () {
  const client = window.StudyBearSocial?.client?.();
  if (!client) return { ok:false, error:"Supabase client unavailable" };
  const rpc = await client.rpc("find_users_for_friend_search",{p_query:"yanlinh"});
  return {
    ok: !rpc.error,
    error: rpc.error?.message || null,
    count: Array.isArray(rpc.data) ? rpc.data.length : 0,
    users: Array.isArray(rpc.data) ? rpc.data.map(x => ({
      id:x.id, username:x.username, display_name:x.display_name
    })) : []
  };
};

window.studyBearSearchDebug = async function(username="yanlinh"){
  try{
    const client=window.StudyBearSocial?.client?.();
    if(!client) return {ok:false,error:"Supabase client unavailable"};
    const me=await client.auth.getUser();
    const q=normalizeUsername(username);
    const res=await client.from("profiles")
      .select("id,username,display_name,avatar_url,updated_at")
      .ilike("username", `%${q}%`)
      .limit(20);
    return {
      ok:!res.error,
      signedIn:Boolean(me?.data?.user),
      query:q,
      error:res.error?.message||null,
      rows:(res.data||[]).map(x=>({id:x.id,username:x.username,display_name:x.display_name}))
    };
  }catch(error){
    return {ok:false,error:error.message};
  }
};


/* ---------- PUBLIC PROFILE MODAL BINDINGS ---------- */
document.addEventListener("DOMContentLoaded",()=>{
  $("publicProfileClose")?.addEventListener("click",()=>window.StudyBearSocial?.closePublicProfile());
  $("itemDetailClose")?.addEventListener("click",()=>window.StudyBearSocial?.closeCollectionItem());
  $("itemDetailCloseButton")?.addEventListener("click",()=>window.StudyBearSocial?.closeCollectionItem());
  $("publicProfileOverlay")?.addEventListener("click",e=>{ if(e.target.id==="publicProfileOverlay") window.StudyBearSocial?.closePublicProfile(); });
  $("itemDetailOverlay")?.addEventListener("click",e=>{ if(e.target.id==="itemDetailOverlay") window.StudyBearSocial?.closeCollectionItem(); });
});
