const LANGUAGE_STORAGE_KEY = 'gosuni2025.language';

const LANGUAGES = [
  { code: 'ko', label: '한국어', htmlLang: 'ko' },
  { code: 'ja', label: '日本語', htmlLang: 'ja' },
  { code: 'zh-CN', label: '简体中文', htmlLang: 'zh-CN' },
  { code: 'zh-TW', label: '繁體中文', htmlLang: 'zh-TW' },
  { code: 'en', label: 'English', htmlLang: 'en' },
  { code: 'es', label: 'Español', htmlLang: 'es' },
];

const TEXT = {
  ko: {
    'common.languageLabel': '언어',
    'common.home': '홈',
    'common.about': '소개',
    'common.support': '고객센터',
    'common.privacy': '개인정보 처리방침',
    'common.terms': '서비스 이용약관',
    'common.brand': '브랜드',
    'common.backHome': '← 홈으로',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025–2026 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Gosuni2025 - Zombie Defense & Manual Rice Sorting',
    'meta.index.description': 'Zombie Defense와 Manual Rice Sorting을 제공하는 Gosuni2025 공식 홈페이지입니다. iOS와 원스토어 출시 정보를 확인하세요.',
    'meta.support.title': '고객센터 - 고순이2025',
    'meta.support.description': '고순이2025에서 제공하는 앱과 게임을 위한 공용 고객센터입니다.',
    'meta.privacy.title': '개인정보 처리방침 - Gosuni2025',
    'meta.privacy.description': 'Gosuni2025에서 제공하는 앱과 게임의 개인정보 처리방침입니다.',
    'meta.terms.title': '서비스 이용약관 - Gosuni2025',
    'meta.terms.description': 'Gosuni2025에서 제공하는 앱과 게임의 서비스 이용약관입니다.',
    'index.nav.apps': '출시 앱',
    'index.nav.features': '특징',
    'index.nav.about': '게임 소개',
    'index.nav.download': '다운로드',
    'index.hero.title': '최후의 방어선을 사수하라',
    'index.hero.subtitle': '끊임없이 몰려오는 좀비 떼로부터 기지를 방어하세요. 당신의 전략이 인류의 마지막 희망입니다.',
    'index.downloadStore': '원스토어에서 다운로드',
    'index.appStoreAlt': 'App Store에서 다운로드',
    'index.googlePlayAlt': 'Google Play에서 다운로드',
    'index.badgeAlt': '원스토어에서 다운로드',
    'index.release.iconAlt': 'Manual Rice Sorting 아이콘',
    'index.release.kicker': 'iOS 출시 완료',
    'index.release.title': 'Manual Rice Sorting을 App Store에서 만나보세요',
    'index.apps.kicker': 'Gosuni2025 Apps',
    'index.apps.title': '출시 앱',
    'index.apps.intro': '지금 바로 다운로드할 수 있는 Gosuni2025의 앱과 게임을 확인하세요.',
    'index.manual.iconAlt': 'Manual Rice Sorting 아이콘',
    'index.manual.screenshotAlt': 'Manual Rice Sorting 게임 화면',
    'index.manual.status': 'iOS · Android 출시',
    'index.manual.description': '원을 키워 쌀알을 집고, 색깔별 목표 영역으로 옮기는 손맛 중심 물리 퍼즐입니다.',
    'index.manual.platform': '모바일용 무료 캐주얼 퍼즐',
    'index.zombie.iconAlt': 'Zombie Defense 아이콘',
    'index.zombie.status': 'iOS · 원스토어 출시',
    'index.zombie.description': '끊임없이 몰려오는 좀비 떼를 막아내는 전략 디펜스 게임입니다.',
    'index.zombie.platform': '모바일에서 바로 플레이',
    'index.features.title': '게임 특징',
    'index.feature.weapons.title': '다양한 무기',
    'index.feature.weapons.body': '소총, 샷건, 화염방사기 등 강력한 무기로 좀비를 쓸어버리세요.',
    'index.feature.defense.title': '전략적 방어',
    'index.feature.defense.body': '바리케이드와 터렛을 설치하여 완벽한 방어선을 구축하세요.',
    'index.feature.waves.title': '끝없는 웨이브',
    'index.feature.waves.body': '점점 더 강력해지는 좀비들과 보스 몬스터에 도전하세요.',
    'index.about.title': '생존을 위한 사투',
    'index.about.body': 'Zombie Defense는 긴장감 넘치는 전략 디펜스 게임입니다. 자원을 관리하고, 유닛을 업그레이드하고, 몰려오는 좀비들로부터 생존자를 지켜내야 합니다. 지금 바로 전장에 합류하세요!',
    'support.serviceName': 'Gosuni2025 Support',
    'support.title': '고순이2025 고객센터',
    'support.intro': '고순이2025에서 제공하는 앱과 게임을 위한 공용 문의 창구입니다. 서비스 이용 중 불편한 점, 오류 제보, 제안 사항이 있다면 아래 이메일로 알려주세요.',
    'support.email.title': '이메일 문의',
    'support.email.body': '문의 내용을 보내주시면 확인 후 순차적으로 답변드리겠습니다. 정확한 확인을 위해 이용 중인 앱 또는 게임 이름을 함께 적어주세요.',
    'support.email.button': '이메일 보내기',
    'support.categories.title': '문의 가능 항목',
    'support.category.service.title': '서비스 이용 문의',
    'support.category.service.body': '앱 또는 게임 이용 방법, 설치, 실행, 계정 관련 문의',
    'support.category.bug.title': '오류 및 버그 제보',
    'support.category.bug.body': '비정상 종료, 화면 표시 오류, 저장 문제 등 이용 중 발생한 문제',
    'support.category.payment.title': '결제 및 광고 문의',
    'support.category.payment.body': '광고 시청 보상, 스토어 결제, 상품 이용과 관련된 문의',
    'support.category.feedback.title': '개선 제안',
    'support.category.feedback.body': '새 기능, 밸런스, 편의성 개선 등 서비스에 대한 의견',
    'support.info.title': '문의 시 포함하면 좋은 정보',
    'support.info.app': '이용 중인 앱 또는 게임 이름',
    'support.info.device': '사용 중인 기기 모델과 OS 버전',
    'support.info.date': '문제가 발생한 날짜와 상황',
    'support.info.screenshot': '오류 화면이나 결제 내역 등 확인에 필요한 스크린샷',
    'support.notice.title': '안내',
    'support.notice.body': '개인정보 처리방침과 서비스 이용약관은 각 서비스의 특성에 따라 별도로 안내될 수 있습니다. 문의 과정에서 전달된 정보는 문의 확인과 답변 목적에 한해 사용됩니다.',
    'brand.streaming.title': '게임 방송 및 수익화 가이드라인',
    'brand.streaming.heading': 'Gosuni2025 게임 실황, 영상 게시, 라이브 방송 안내',
    'brand.streaming.intro': 'Gosuni2025는 이 사이트에서 소개하는 게임의 실황, 리뷰, 공략, 클립, 라이브 방송, 스크린샷 공유를 환영합니다. 개인/법인 구분 없이 사전 허락이나 연락은 필요하지 않습니다.',
    'brand.streaming.scope.title': '허용 범위',
    'brand.streaming.scope.body': 'YouTube, Twitch, X, TikTok, 니코니코 동화 등 영상·방송 플랫폼에 플레이 영상, 실황, 쇼츠, 스크린샷을 자유롭게 게시할 수 있습니다.',
    'brand.streaming.monetization.title': '수익화',
    'brand.streaming.monetization.body': '각 플랫폼의 파트너 프로그램, 광고 수익, 후원, 멤버십, 스폰서 방송 등을 통한 수익화를 허용합니다.',
    'brand.streaming.spoiler.title': '스포일러',
    'brand.streaming.spoiler.body': '스포일러가 포함된 게시도 허용합니다. 핵심 결말이나 숨겨진 요소를 다룰 때는 시청자를 위해 제목, 썸네일, 설명란에 “스포일러 있음” 표시를 권장합니다.',
    'brand.streaming.credit.title': '표기 안내',
    'brand.streaming.credit.body': '가능하면 영상 설명란 또는 방송 화면에 게임명과 공식 페이지, App Store 등 스토어 링크를 적어주세요.',
  },
  ja: {
    'common.languageLabel': '言語',
    'common.home': 'ホーム',
    'common.about': '紹介',
    'common.support': 'サポート',
    'common.privacy': 'プライバシーポリシー',
    'common.terms': '利用規約',
    'common.brand': 'ブランド',
    'common.backHome': '← ホームへ',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025–2026 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Gosuni2025 - Zombie Defense & Manual Rice Sorting',
    'meta.index.description': 'Zombie DefenseとManual Rice Sortingを提供するGosuni2025公式サイトです。iOSとONE Storeの配信情報をご確認ください。',
    'meta.support.title': 'サポート - Gosuni2025',
    'meta.support.description': 'Gosuni2025が提供するアプリとゲームの共通サポート窓口です。',
    'meta.privacy.title': 'プライバシーポリシー - Gosuni2025',
    'meta.privacy.description': 'Gosuni2025が提供するアプリとゲームのプライバシーポリシーです。',
    'meta.terms.title': '利用規約 - Gosuni2025',
    'meta.terms.description': 'Gosuni2025が提供するアプリとゲームの利用規約です。',
    'index.nav.apps': '配信中アプリ',
    'index.nav.features': '特徴',
    'index.nav.about': 'ゲーム紹介',
    'index.nav.download': 'ダウンロード',
    'index.hero.title': '最後の防衛線を守り抜け',
    'index.hero.subtitle': '押し寄せるゾンビの群れから基地を守りましょう。あなたの戦略が人類最後の希望です。',
    'index.downloadStore': 'ONE Storeでダウンロード',
    'index.appStoreAlt': 'App Storeでダウンロード',
    'index.googlePlayAlt': 'Google Playでダウンロード',
    'index.badgeAlt': 'ONE Storeでダウンロード',
    'index.release.iconAlt': 'Manual Rice Sortingアイコン',
    'index.release.kicker': 'iOS配信開始',
    'index.release.title': 'Manual Rice SortingをApp Storeでチェック',
    'index.apps.kicker': 'Gosuni2025 Apps',
    'index.apps.title': '配信中アプリ',
    'index.apps.intro': '今すぐダウンロードできるGosuni2025のアプリとゲームをご確認ください。',
    'index.manual.iconAlt': 'Manual Rice Sortingアイコン',
    'index.manual.screenshotAlt': 'Manual Rice Sortingのゲーム画面',
    'index.manual.status': 'iOS · Android配信中',
    'index.manual.description': '円を広げて米粒をつかみ、色ごとのゴールへ運ぶ手触り重視の物理パズルです。',
    'index.manual.platform': 'モバイル向け無料カジュアルパズル',
    'index.zombie.iconAlt': 'Zombie Defenseアイコン',
    'index.zombie.status': 'iOS · ONE Store配信中',
    'index.zombie.description': '押し寄せるゾンビの群れを食い止める戦略ディフェンスゲームです。',
    'index.zombie.platform': 'モバイルですぐプレイ',
    'index.features.title': 'ゲームの特徴',
    'index.feature.weapons.title': '多彩な武器',
    'index.feature.weapons.body': 'ライフル、ショットガン、火炎放射器など強力な武器でゾンビを一掃しましょう。',
    'index.feature.defense.title': '戦略的な防衛',
    'index.feature.defense.body': 'バリケードやタレットを設置して、強固な防衛線を築きましょう。',
    'index.feature.waves.title': '終わりなきウェーブ',
    'index.feature.waves.body': '次第に強くなるゾンビとボスモンスターに挑みましょう。',
    'index.about.title': '生存をかけた戦い',
    'index.about.body': 'Zombie Defenseは緊張感あふれる戦略ディフェンスゲームです。資源を管理し、ユニットを強化し、襲い来るゾンビから生存者を守り抜きましょう。今すぐ戦場へ参加してください。',
    'support.serviceName': 'Gosuni2025 サポート',
    'support.title': 'Gosuni2025 サポートセンター',
    'support.intro': 'Gosuni2025が提供するアプリとゲームの共通お問い合わせ窓口です。ご利用中の不具合、エラー報告、ご提案がありましたら、下記メールアドレスまでお知らせください。',
    'support.email.title': 'メールでのお問い合わせ',
    'support.email.body': 'お問い合わせ内容を確認後、順次返信いたします。確認を正確に行うため、ご利用中のアプリまたはゲーム名もあわせてお知らせください。',
    'support.email.button': 'メールを送信',
    'support.categories.title': 'お問い合わせ内容',
    'support.category.service.title': 'サービス利用に関する質問',
    'support.category.service.body': 'アプリまたはゲームの使い方、インストール、起動、アカウントに関するお問い合わせ',
    'support.category.bug.title': 'エラー・不具合報告',
    'support.category.bug.body': 'クラッシュ、表示不具合、保存問題など利用中に発生した問題',
    'support.category.payment.title': '決済・広告に関する質問',
    'support.category.payment.body': '広告視聴報酬、ストア決済、商品利用に関するお問い合わせ',
    'support.category.feedback.title': '改善提案',
    'support.category.feedback.body': '新機能、バランス、利便性向上などサービスへのご意見',
    'support.info.title': 'お問い合わせ時に含めるとよい情報',
    'support.info.app': 'ご利用中のアプリまたはゲーム名',
    'support.info.device': '端末モデルとOSバージョン',
    'support.info.date': '問題が発生した日時と状況',
    'support.info.screenshot': 'エラー画面や決済履歴など確認に必要なスクリーンショット',
    'support.notice.title': 'ご案内',
    'support.notice.body': 'プライバシーポリシーおよび利用規約は、各サービスの特性に応じて別途案内される場合があります。お問い合わせの過程で提供された情報は、確認および回答の目的に限り使用されます。',
    'brand.streaming.title': '動画配信及び収益化に関するガイドライン',
    'brand.streaming.heading': 'Gosuni2025のゲーム実況・動画投稿・ライブ配信について',
    'brand.streaming.intro': 'Gosuni2025は、当サイトで紹介しているゲームの実況、レビュー、攻略、切り抜き、ライブ配信、スクリーンショット投稿を歓迎します。個人・法人を問わず、事前の許諾や連絡は不要です。',
    'brand.streaming.scope.title': '許可される範囲',
    'brand.streaming.scope.body': 'YouTube、Twitch、X、TikTok、ニコニコ動画などの動画・配信プラットフォームへ、プレイ動画や実況、ショート動画、静止画を自由に投稿できます。',
    'brand.streaming.monetization.title': '収益化',
    'brand.streaming.monetization.body': '各プラットフォームのパートナープログラム、広告収益、投げ銭、メンバーシップ、スポンサー付き配信などによる収益化を許可します。',
    'brand.streaming.spoiler.title': 'ネタバレ',
    'brand.streaming.spoiler.body': 'ネタバレを含む投稿も許可します。物語の核心や隠し要素を扱う場合は、視聴者のためにタイトル、サムネイル、説明欄へ「ネタバレあり」と記載することをおすすめします。',
    'brand.streaming.credit.title': '表記について',
    'brand.streaming.credit.body': '可能であれば、動画説明欄または配信画面にゲーム名と公式ページ、App Storeなどのストアリンクを記載してください。',
  },
  'zh-CN': {
    'common.languageLabel': '语言',
    'common.home': '首页',
    'common.about': '介绍',
    'common.support': '客户支持',
    'common.privacy': '隐私政策',
    'common.terms': '服务条款',
    'common.brand': '品牌',
    'common.backHome': '← 返回首页',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025–2026 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Gosuni2025 - Zombie Defense & Manual Rice Sorting',
    'meta.index.description': 'Gosuni2025 官方网站，提供 Zombie Defense 和 Manual Rice Sorting，并汇总 iOS 与 ONE Store 上架信息。',
    'meta.support.title': '客户支持 - Gosuni2025',
    'meta.support.description': 'Gosuni2025 应用和游戏的通用客户支持页面。',
    'meta.privacy.title': '隐私政策 - Gosuni2025',
    'meta.privacy.description': 'Gosuni2025 应用和游戏的隐私政策。',
    'meta.terms.title': '服务条款 - Gosuni2025',
    'meta.terms.description': 'Gosuni2025 应用和游戏的服务条款。',
    'index.nav.apps': '已发布应用',
    'index.nav.features': '特色',
    'index.nav.about': '游戏介绍',
    'index.nav.download': '下载',
    'index.hero.title': '守住最后的防线',
    'index.hero.subtitle': '保护基地免受不断涌来的僵尸群袭击。你的策略就是人类最后的希望。',
    'index.downloadStore': '在ONE Store下载',
    'index.appStoreAlt': '在App Store下载',
    'index.googlePlayAlt': '在Google Play下载',
    'index.badgeAlt': '在ONE Store下载',
    'index.release.iconAlt': 'Manual Rice Sorting 图标',
    'index.release.kicker': 'iOS 已发布',
    'index.release.title': '在 App Store 查看 Manual Rice Sorting',
    'index.apps.kicker': 'Gosuni2025 Apps',
    'index.apps.title': '已发布应用',
    'index.apps.intro': '查看现在可以下载的 Gosuni2025 应用和游戏。',
    'index.manual.iconAlt': 'Manual Rice Sorting 图标',
    'index.manual.screenshotAlt': 'Manual Rice Sorting 游戏画面',
    'index.manual.status': 'iOS · Android 已发布',
    'index.manual.description': '放大圆圈抓取米粒，并把它们移动到对应颜色目标区的物理休闲益智游戏。',
    'index.manual.platform': '移动设备免费休闲益智游戏',
    'index.zombie.iconAlt': 'Zombie Defense 图标',
    'index.zombie.status': 'iOS · ONE Store 已发布',
    'index.zombie.description': '抵挡不断涌来的僵尸群的策略防守游戏。',
    'index.zombie.platform': '可在移动设备上立即游玩',
    'index.features.title': '游戏特色',
    'index.feature.weapons.title': '多样武器',
    'index.feature.weapons.body': '使用步枪、霰弹枪、火焰喷射器等强力武器清扫僵尸。',
    'index.feature.defense.title': '策略防守',
    'index.feature.defense.body': '建造路障和炮塔，打造坚固的防线。',
    'index.feature.waves.title': '无尽波次',
    'index.feature.waves.body': '挑战越来越强的僵尸和首领怪物。',
    'index.about.title': '为生存而战',
    'index.about.body': 'Zombie Defense 是一款紧张刺激的策略防守游戏。管理资源、升级单位，并保护幸存者免受僵尸袭击。现在加入战场吧！',
    'support.serviceName': 'Gosuni2025 支持',
    'support.title': 'Gosuni2025 客户支持',
    'support.intro': '这是 Gosuni2025 提供的应用和游戏通用咨询窗口。如在使用中遇到问题、错误或有建议，请通过下方邮箱联系我们。',
    'support.email.title': '邮件咨询',
    'support.email.body': '收到咨询后，我们会确认并依次回复。为了准确确认，请同时写明正在使用的应用或游戏名称。',
    'support.email.button': '发送邮件',
    'support.categories.title': '可咨询项目',
    'support.category.service.title': '服务使用咨询',
    'support.category.service.body': '应用或游戏的使用方法、安装、启动、账号相关问题',
    'support.category.bug.title': '错误与漏洞报告',
    'support.category.bug.body': '异常退出、画面显示错误、保存问题等使用中发生的问题',
    'support.category.payment.title': '支付与广告咨询',
    'support.category.payment.body': '广告观看奖励、商店支付、商品使用相关问题',
    'support.category.feedback.title': '改进建议',
    'support.category.feedback.body': '新功能、平衡性、便利性改进等服务相关意见',
    'support.info.title': '咨询时建议包含的信息',
    'support.info.app': '正在使用的应用或游戏名称',
    'support.info.device': '设备型号和OS版本',
    'support.info.date': '问题发生的日期和情况',
    'support.info.screenshot': '错误画面或支付记录等确认所需截图',
    'support.notice.title': '说明',
    'support.notice.body': '隐私政策和服务条款可能会根据各服务的特性另行说明。咨询过程中提供的信息仅用于确认咨询内容和回复。',
  },
  'zh-TW': {
    'common.languageLabel': '語言',
    'common.home': '首頁',
    'common.about': '介紹',
    'common.support': '客戶支援',
    'common.privacy': '隱私權政策',
    'common.terms': '服務條款',
    'common.brand': '品牌',
    'common.backHome': '← 返回首頁',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025–2026 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Gosuni2025 - Zombie Defense & Manual Rice Sorting',
    'meta.index.description': 'Gosuni2025 官方網站，提供 Zombie Defense 與 Manual Rice Sorting，並整理 iOS 與 ONE Store 上架資訊。',
    'meta.support.title': '客戶支援 - Gosuni2025',
    'meta.support.description': 'Gosuni2025 應用程式與遊戲的共用客戶支援頁面。',
    'meta.privacy.title': '隱私權政策 - Gosuni2025',
    'meta.privacy.description': 'Gosuni2025 應用程式與遊戲的隱私權政策。',
    'meta.terms.title': '服務條款 - Gosuni2025',
    'meta.terms.description': 'Gosuni2025 應用程式與遊戲的服務條款。',
    'index.nav.apps': '已發布應用',
    'index.nav.features': '特色',
    'index.nav.about': '遊戲介紹',
    'index.nav.download': '下載',
    'index.hero.title': '守住最後防線',
    'index.hero.subtitle': '保護基地，抵禦不斷湧來的殭屍群。你的策略就是人類最後的希望。',
    'index.downloadStore': '在ONE Store下載',
    'index.appStoreAlt': '在App Store下載',
    'index.googlePlayAlt': '在Google Play下載',
    'index.badgeAlt': '在ONE Store下載',
    'index.release.iconAlt': 'Manual Rice Sorting 圖示',
    'index.release.kicker': 'iOS 已發布',
    'index.release.title': '到 App Store 查看 Manual Rice Sorting',
    'index.apps.kicker': 'Gosuni2025 Apps',
    'index.apps.title': '已發布應用',
    'index.apps.intro': '查看現在可以下載的 Gosuni2025 應用程式與遊戲。',
    'index.manual.iconAlt': 'Manual Rice Sorting 圖示',
    'index.manual.screenshotAlt': 'Manual Rice Sorting 遊戲畫面',
    'index.manual.status': 'iOS · Android 已發布',
    'index.manual.description': '放大圓圈抓取米粒，並把它們移動到對應顏色目標區的物理休閒益智遊戲。',
    'index.manual.platform': '行動裝置免費休閒益智遊戲',
    'index.zombie.iconAlt': 'Zombie Defense 圖示',
    'index.zombie.status': 'iOS · ONE Store 已發布',
    'index.zombie.description': '抵擋不斷湧來的殭屍群的策略防守遊戲。',
    'index.zombie.platform': '可在行動裝置上立即遊玩',
    'index.features.title': '遊戲特色',
    'index.feature.weapons.title': '多樣武器',
    'index.feature.weapons.body': '使用步槍、霰彈槍、火焰噴射器等強力武器清除殭屍。',
    'index.feature.defense.title': '策略防守',
    'index.feature.defense.body': '建造路障與砲塔，打造穩固的防線。',
    'index.feature.waves.title': '無盡波次',
    'index.feature.waves.body': '挑戰越來越強的殭屍與首領怪物。',
    'index.about.title': '為生存而戰',
    'index.about.body': 'Zombie Defense 是一款緊張刺激的策略防守遊戲。管理資源、升級單位，並保護倖存者免於殭屍襲擊。現在就加入戰場！',
    'support.serviceName': 'Gosuni2025 支援',
    'support.title': 'Gosuni2025 客戶支援',
    'support.intro': '這是 Gosuni2025 提供的應用程式與遊戲共用諮詢窗口。若使用中遇到不便、錯誤或有建議，請透過下方電子郵件告訴我們。',
    'support.email.title': '電子郵件諮詢',
    'support.email.body': '收到諮詢後，我們會確認並依序回覆。為了準確確認，請一併寫下正在使用的應用程式或遊戲名稱。',
    'support.email.button': '寄送電子郵件',
    'support.categories.title': '可諮詢項目',
    'support.category.service.title': '服務使用諮詢',
    'support.category.service.body': '應用程式或遊戲使用方式、安裝、啟動、帳號相關問題',
    'support.category.bug.title': '錯誤與問題回報',
    'support.category.bug.body': '異常關閉、畫面顯示錯誤、儲存問題等使用中發生的問題',
    'support.category.payment.title': '付款與廣告諮詢',
    'support.category.payment.body': '廣告觀看獎勵、商店付款、商品使用相關問題',
    'support.category.feedback.title': '改善建議',
    'support.category.feedback.body': '新功能、平衡性、便利性改善等服務相關意見',
    'support.info.title': '諮詢時建議包含的資訊',
    'support.info.app': '正在使用的應用程式或遊戲名稱',
    'support.info.device': '裝置型號與OS版本',
    'support.info.date': '問題發生的日期與情況',
    'support.info.screenshot': '錯誤畫面或付款紀錄等確認所需截圖',
    'support.notice.title': '說明',
    'support.notice.body': '隱私權政策與服務條款可能會依各服務特性另行說明。諮詢過程中提供的資訊僅用於確認與回覆。',
  },
  en: {
    'common.languageLabel': 'Language',
    'common.home': 'Home',
    'common.about': 'About',
    'common.support': 'Support',
    'common.privacy': 'Privacy Policy',
    'common.terms': 'Terms of Service',
    'common.brand': 'Brand',
    'common.backHome': '← Home',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025–2026 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Gosuni2025 - Zombie Defense & Manual Rice Sorting',
    'meta.index.description': 'Official Gosuni2025 home for Zombie Defense and Manual Rice Sorting, with iOS and ONE Store release links.',
    'meta.support.title': 'Support - Gosuni2025',
    'meta.support.description': 'Shared support center for apps and games provided by Gosuni2025.',
    'meta.privacy.title': 'Privacy Policy - Gosuni2025',
    'meta.privacy.description': 'Privacy policy for apps and games provided by Gosuni2025.',
    'meta.terms.title': 'Terms of Service - Gosuni2025',
    'meta.terms.description': 'Terms of service for apps and games provided by Gosuni2025.',
    'index.nav.apps': 'Released Apps',
    'index.nav.features': 'Features',
    'index.nav.about': 'About',
    'index.nav.download': 'Download',
    'index.hero.title': 'Hold the Last Line',
    'index.hero.subtitle': 'Defend your base from endless waves of zombies. Your strategy is humanity’s final hope.',
    'index.downloadStore': 'Download on ONE Store',
    'index.appStoreAlt': 'Download on the App Store',
    'index.googlePlayAlt': 'Download on Google Play',
    'index.badgeAlt': 'Download on ONE Store',
    'index.release.iconAlt': 'Manual Rice Sorting icon',
    'index.release.kicker': 'Now on iOS',
    'index.release.title': 'Get Manual Rice Sorting on the App Store',
    'index.apps.kicker': 'Gosuni2025 Apps',
    'index.apps.title': 'Released Apps',
    'index.apps.intro': 'Explore the Gosuni2025 apps and games you can download now.',
    'index.manual.iconAlt': 'Manual Rice Sorting icon',
    'index.manual.screenshotAlt': 'Manual Rice Sorting gameplay screen',
    'index.manual.status': 'Available on iOS · Android',
    'index.manual.description': 'A tactile physics puzzle where you grow a circle, pick up rice grains, and sort them into matching color zones.',
    'index.manual.platform': 'Free casual puzzle for mobile',
    'index.zombie.iconAlt': 'Zombie Defense icon',
    'index.zombie.status': 'Available on iOS · ONE Store',
    'index.zombie.description': 'A strategy defense game about holding back endless waves of zombies.',
    'index.zombie.platform': 'Play now on mobile',
    'index.features.title': 'Game Features',
    'index.feature.weapons.title': 'Varied Weapons',
    'index.feature.weapons.body': 'Clear out zombies with rifles, shotguns, flamethrowers, and other powerful weapons.',
    'index.feature.defense.title': 'Strategic Defense',
    'index.feature.defense.body': 'Build barricades and turrets to create a strong defensive line.',
    'index.feature.waves.title': 'Endless Waves',
    'index.feature.waves.body': 'Face increasingly dangerous zombies and boss monsters.',
    'index.about.title': 'A Fight for Survival',
    'index.about.body': 'Zombie Defense is a tense strategy defense game. Manage resources, upgrade units, and protect survivors from the incoming horde. Join the battlefield now!',
    'support.serviceName': 'Gosuni2025 Support',
    'support.title': 'Gosuni2025 Support Center',
    'support.intro': 'This is the shared contact point for apps and games provided by Gosuni2025. If you experience issues, find bugs, or have suggestions, please contact us by email below.',
    'support.email.title': 'Email Support',
    'support.email.body': 'We will review your message and reply in order. Please include the name of the app or game you are using so we can check it accurately.',
    'support.email.button': 'Send Email',
    'support.categories.title': 'What You Can Ask About',
    'support.category.service.title': 'Service Questions',
    'support.category.service.body': 'How to use, install, launch, or manage accounts for apps or games',
    'support.category.bug.title': 'Errors and Bug Reports',
    'support.category.bug.body': 'Crashes, display problems, save issues, and other problems while using a service',
    'support.category.payment.title': 'Payments and Ads',
    'support.category.payment.body': 'Ad-view rewards, store payments, and product use questions',
    'support.category.feedback.title': 'Suggestions',
    'support.category.feedback.body': 'Feedback on new features, balance, convenience, and service improvements',
    'support.info.title': 'Helpful Information to Include',
    'support.info.app': 'Name of the app or game you are using',
    'support.info.device': 'Device model and OS version',
    'support.info.date': 'Date and situation when the issue occurred',
    'support.info.screenshot': 'Screenshots needed to confirm errors or payment details',
    'support.notice.title': 'Notice',
    'support.notice.body': 'Privacy policies and terms of service may be provided separately depending on each service. Information sent during support inquiries is used only to check and answer the inquiry.',
  },
  es: {
    'common.languageLabel': 'Idioma',
    'common.home': 'Inicio',
    'common.about': 'Acerca de',
    'common.support': 'Soporte',
    'common.privacy': 'Política de privacidad',
    'common.terms': 'Términos de servicio',
    'common.brand': 'Marca',
    'common.backHome': '← Inicio',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025–2026 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Gosuni2025 - Zombie Defense & Manual Rice Sorting',
    'meta.index.description': 'Sitio oficial de Gosuni2025 para Zombie Defense y Manual Rice Sorting, con enlaces de lanzamiento en iOS y ONE Store.',
    'meta.support.title': 'Soporte - Gosuni2025',
    'meta.support.description': 'Centro de soporte común para las apps y juegos ofrecidos por Gosuni2025.',
    'meta.privacy.title': 'Política de privacidad - Gosuni2025',
    'meta.privacy.description': 'Política de privacidad de las apps y juegos de Gosuni2025.',
    'meta.terms.title': 'Términos de servicio - Gosuni2025',
    'meta.terms.description': 'Términos de servicio de las apps y juegos de Gosuni2025.',
    'index.nav.apps': 'Apps publicadas',
    'index.nav.features': 'Características',
    'index.nav.about': 'Acerca del juego',
    'index.nav.download': 'Descargar',
    'index.hero.title': 'Defiende la última línea',
    'index.hero.subtitle': 'Protege tu base de oleadas interminables de zombis. Tu estrategia es la última esperanza de la humanidad.',
    'index.downloadStore': 'Descargar en ONE Store',
    'index.appStoreAlt': 'Descargar en App Store',
    'index.googlePlayAlt': 'Descargar en Google Play',
    'index.badgeAlt': 'Descargar en ONE Store',
    'index.release.iconAlt': 'Ícono de Manual Rice Sorting',
    'index.release.kicker': 'Disponible en iOS',
    'index.release.title': 'Consigue Manual Rice Sorting en App Store',
    'index.apps.kicker': 'Gosuni2025 Apps',
    'index.apps.title': 'Apps publicadas',
    'index.apps.intro': 'Explora las apps y juegos de Gosuni2025 que puedes descargar ahora.',
    'index.manual.iconAlt': 'Ícono de Manual Rice Sorting',
    'index.manual.screenshotAlt': 'Pantalla de juego de Manual Rice Sorting',
    'index.manual.status': 'Disponible en iOS · Android',
    'index.manual.description': 'Un rompecabezas físico y táctil donde agrandas un círculo, recoges granos de arroz y los clasificas por color.',
    'index.manual.platform': 'Rompecabezas casual gratis para móvil',
    'index.zombie.iconAlt': 'Ícono de Zombie Defense',
    'index.zombie.status': 'Disponible en iOS · ONE Store',
    'index.zombie.description': 'Un juego de defensa estratégica para resistir oleadas interminables de zombis.',
    'index.zombie.platform': 'Juega ahora en móvil',
    'index.features.title': 'Características del juego',
    'index.feature.weapons.title': 'Armas variadas',
    'index.feature.weapons.body': 'Elimina zombis con rifles, escopetas, lanzallamas y otras armas poderosas.',
    'index.feature.defense.title': 'Defensa estratégica',
    'index.feature.defense.body': 'Construye barricadas y torretas para crear una línea defensiva sólida.',
    'index.feature.waves.title': 'Oleadas infinitas',
    'index.feature.waves.body': 'Enfréntate a zombis y jefes cada vez más peligrosos.',
    'index.about.title': 'Una lucha por sobrevivir',
    'index.about.body': 'Zombie Defense es un intenso juego de defensa estratégica. Gestiona recursos, mejora unidades y protege a los supervivientes de la horda. ¡Únete ahora al campo de batalla!',
    'support.serviceName': 'Soporte de Gosuni2025',
    'support.title': 'Centro de soporte de Gosuni2025',
    'support.intro': 'Este es el punto de contacto común para las apps y juegos de Gosuni2025. Si tienes problemas, reportes de errores o sugerencias, escríbenos al correo indicado abajo.',
    'support.email.title': 'Consulta por correo',
    'support.email.body': 'Revisaremos tu mensaje y responderemos por orden. Para comprobarlo correctamente, incluye el nombre de la app o juego que estás usando.',
    'support.email.button': 'Enviar correo',
    'support.categories.title': 'Temas de consulta',
    'support.category.service.title': 'Uso del servicio',
    'support.category.service.body': 'Uso, instalación, inicio y cuentas de apps o juegos',
    'support.category.bug.title': 'Errores y reportes',
    'support.category.bug.body': 'Cierres inesperados, errores de pantalla, problemas de guardado y otros fallos',
    'support.category.payment.title': 'Pagos y anuncios',
    'support.category.payment.body': 'Recompensas por anuncios, pagos en tienda y uso de productos',
    'support.category.feedback.title': 'Sugerencias',
    'support.category.feedback.body': 'Opiniones sobre nuevas funciones, equilibrio, comodidad y mejoras del servicio',
    'support.info.title': 'Información útil para incluir',
    'support.info.app': 'Nombre de la app o juego que estás usando',
    'support.info.device': 'Modelo del dispositivo y versión del sistema operativo',
    'support.info.date': 'Fecha y situación en la que ocurrió el problema',
    'support.info.screenshot': 'Capturas necesarias para confirmar errores o pagos',
    'support.notice.title': 'Aviso',
    'support.notice.body': 'La política de privacidad y los términos de servicio pueden indicarse por separado según las características de cada servicio. La información enviada durante una consulta se usa solo para revisar y responder dicha consulta.',
  },
};

const PAGE_TEXT = {
  ko: {
    'meta.index.title': 'Gosuni2025 - 현현기록전과 앱·게임',
    'meta.index.description': 'Gosuni2025의 스토어 출시작 4종과 itch.io에서 바로 플레이할 수 있는 브라우저 게임·데모 9종을 소개합니다.',
    'meta.zombie.title': 'Zombie Defense - 최후의 방어선',
    'meta.zombie.description': '좀비 아포칼립스에서 살아남으세요. 전략 디펜스 게임 Zombie Defense를 App Store와 원스토어에서 다운로드하세요.',
    'meta.manual.title': 'Manual Rice Sorting - 쌀알 분류 퍼즐',
    'meta.manual.description': '원을 키워 쌀알을 집고 색깔별 목표 영역으로 옮기는 iOS와 Android용 물리 기반 캐주얼 퍼즐 Manual Rice Sorting 공식 페이지입니다.',
    'meta.taikyoku.title': '대국전열: 오토 배틀러 - 전략 오토 배틀러',
    'meta.taikyoku.description': '큰 전열 위에 부대를 배치하고 자동 전투로 승부하는 iPhone 전략 오토 배틀러, 대국전열: 오토 배틀러 공식 페이지입니다.',
    'meta.manifestation.title': '현현기록전 - 도시 괴이 카드 배틀',
    'meta.manifestation.description': '2020년대 동아시아풍 도시 판타지에서 사건 기록과 대응 카드로 덱을 구성하고 전투하는 현현기록전 공식 페이지입니다.',
    'zombie.screenshotAlt': 'Zombie Defense 게임 화면',
    'home.nav.apps': '앱',
    'home.nav.explore': '둘러보기',
    'home.hero.kicker': 'Gosuni2025 Apps',
    'home.hero.title': '작고 선명한 게임을 만듭니다',
    'home.hero.subtitle': '도시 괴이 카드 배틀부터 전열을 짜는 오토 배틀러, 좀비 디펜스, 쌀알 분류 퍼즐까지 네 가지 플레이를 선보입니다.',
    'home.apps.kicker': 'Released Apps',
    'home.apps.title': '네 개의 앱, 각자의 플레이',
    'home.apps.intro': 'Gosuni2025가 출시한 게임의 소개와 스토어 링크를 한곳에서 확인하세요.',
    'home.card.detail': '자세히 보기',
    'index.taikyoku.iconAlt': '대국전열: 오토 배틀러 아이콘',
    'index.taikyoku.screenshotAlt': '대국전열: 오토 배틀러 게임 화면',
    'index.taikyoku.status': 'iOS 출시 완료',
    'index.taikyoku.title': '대국전열: 오토 배틀러',
    'index.taikyoku.description': '큰 전열 위에 부대를 배치하고, 자동 전투 결과로 승부하는 전략 오토 배틀러입니다.',
    'index.manifestation.iconAlt': '현현기록전 아이콘',
    'index.manifestation.screenshotAlt': '현현기록전 카드 배틀 게임 화면',
    'index.manifestation.status': 'iOS 출시 완료',
    'index.manifestation.title': '현현기록전',
    'index.manifestation.subtitle': '도시 괴이 카드 배틀',
    'index.manifestation.description': '2020년대 동아시아풍 도시 판타지에서 사건 기록과 대응 카드를 모아 덱을 구성하는 모바일 카드 배틀러입니다.',
    'index.manifestation.appStoreCta': 'App Store에서 만나보기',
    'manifestation.hero.kicker': 'iOS 출시 완료',
    'manifestation.hero.subtitle': '2020년대 동아시아풍 도시 판타지에서 사건 기록과 대응 카드로 덱을 구성하는 도시 괴이 카드 배틀입니다.',
    'manifestation.features.title': '게임 특징',
    'manifestation.feature.records.title': '사건 기록과 대응 카드',
    'manifestation.feature.records.body': '도시의 괴이 사건을 기록으로 수집하고, 상황에 맞는 대응 카드를 선택해 전투를 준비합니다.',
    'manifestation.feature.deck.title': '캐릭터·주문·장비·유물·권역',
    'manifestation.feature.deck.body': '다섯 종류의 카드를 조합해 자신만의 덱을 구성하고 사건마다 새로운 대응 방식을 찾아보세요.',
    'manifestation.feature.battle.title': '직관적인 카드 배치 전투',
    'manifestation.feature.battle.body': '카드를 전장에 배치하고 효과가 이어지는 흐름을 읽으며 도시 괴이에 맞섭니다.',
    'manifestation.screens.kicker': 'Card Battle',
    'manifestation.screens.title': '사건을 기록하고 대응하세요',
    'manifestation.screens.intro': '수집한 사건 기록과 대응 카드로 덱을 만들고, 직관적인 카드 배치 전투에서 전략을 검증하세요.',
    'manifestation.battleAlt': '현현기록전 카드 배치 전투 화면',
    'manifestation.battle.caption': '사건 기록과 대응 카드를 배치해 상대의 기록을 무너뜨리는 전투 화면',
    'manifestation.guide.kicker': 'Play Guide',
    'manifestation.guide.title': '기록을 읽고 대응하세요',
    'manifestation.guide.intro': '사건 기록을 확인하고 상황에 맞는 카드를 선택해 한 턴씩 대응을 이어가세요.',
    'manifestation.guide.battle.title': '카드를 배치하고 턴 종료',
    'manifestation.guide.battle.body': '사용할 카드를 선택해 전장에 배치한 뒤 턴을 종료하세요. 카드 효과와 상대의 대응을 읽는 것이 핵심입니다.',
    'manifestation.guide.platform.title': 'iOS에서 플레이',
    'manifestation.guide.platform.body': '현현기록전은 iOS로 출시되었습니다. 온라인 기능을 이용하려면 네트워크 연결이 필요합니다.',
    'manifestation.guide.support.title': '오류 및 이용 문의',
    'manifestation.guide.support.body': '문의할 때 앱 이름, 사용 기기, 문제가 발생한 시간을 함께 적어주시면 더 빠르게 확인할 수 있습니다.',
    'manifestation.about.title': '기록과 카드로 맞서는 도시 괴이',
    'manifestation.about.body': '현현기록전은 2020년대 동아시아풍 도시 판타지를 배경으로 한 카드 배틀 게임입니다. 캐릭터, 주문, 장비, 유물, 권역 카드를 조합해 덱을 구성하고 사건 기록 속 괴이에 대응하세요.',
    'timeline.kicker': 'Company Timeline',
    'timeline.title': '출시로 이어진 작은 기록',
    'timeline.intro': 'Gosuni2025가 각 스토어에 선보인 네 게임의 출시 여정을 시간순으로 확인하세요.',
    'timeline.zombie': 'Zombie Defense가 iOS와 원스토어에서 첫 방어선을 열었습니다.',
    'timeline.manual': 'Manual Rice Sorting이 iOS와 Android에 손맛 중심의 쌀알 분류 퍼즐을 선보였습니다.',
    'timeline.taikyoku': '대국전열: 오토 배틀러가 iOS에서 넓은 전열과 자동 전투를 펼쳤습니다.',
    'timeline.manifestation': '현현기록전이 App Store에 출시되며 도시 괴이 카드 배틀의 기록을 시작했습니다.',
    'timeline.latest': '최신 출시',
    'timeline.releaseLabel': '출시',
    'manual.nav.video': '영상',
    'manual.hero.kicker': 'iOS · Android 출시 완료',
    'manual.hero.subtitle': '손가락으로 커지는 원을 조작해 쌀알을 집고, 색깔별 목표 영역으로 옮기는 물리 기반 캐주얼 퍼즐입니다.',
    'manual.features.title': '게임 특징',
    'manual.feature.control.title': '원을 키우는 조작',
    'manual.feature.control.body': '터치와 마우스를 모두 지원하며, 원의 크기와 움직임으로 쌀알을 직접 집어 올립니다.',
    'manual.feature.sort.title': '색깔별 분류',
    'manual.feature.sort.body': '스테이지가 올라갈수록 더 많은 쌀알과 색상 조합을 빠르게 구분해야 합니다.',
    'manual.feature.score.title': '짧게 반복하는 기록',
    'manual.feature.score.body': '점수, 콤보, 최고 기록 저장과 사운드 피드백으로 짧은 플레이를 또렷하게 이어갑니다.',
    'manual.video.kicker': 'Gameplay',
    'manual.video.title': '플레이 영상',
    'manual.video.intro': '실제 쌀알 분류 흐름을 짧은 영상으로 확인하세요.',
    'manual.about.title': '쌀알을 직접 옮기는 손맛',
    'manual.about.body': 'Manual Rice Sorting은 단순한 규칙 안에서 미세한 드래그 감각을 반복해서 즐기는 캐주얼 퍼즐입니다. 색을 보고, 원을 키우고, 목표 영역에 정확히 내려놓는 작은 루프에 집중했습니다.',
    'taikyoku.hero.kicker': 'iOS 출시 완료',
    'taikyoku.hero.subtitle': '넓은 전장에 부대를 배치하고, 상점과 시너지로 전열을 다듬은 뒤 자동 전투의 결과를 지켜보는 전략 오토 배틀러입니다.',
    'taikyoku.features.title': '게임 특징',
    'taikyoku.feature.line.title': '큰 보드 위 전열',
    'taikyoku.feature.line.body': '넓은 전장에 유닛을 놓고, 이동과 공격 범위를 고려해 다음 전투를 준비합니다.',
    'taikyoku.feature.shop.title': '상점과 시너지',
    'taikyoku.feature.shop.body': '상점 선택, 룬, 역할 조합으로 매 판 다른 부대 구성을 만들어 갑니다.',
    'taikyoku.feature.battle.title': '자동 전투와 기록',
    'taikyoku.feature.battle.body': '전투가 시작되면 결과를 지켜보고, 로그와 상대 덱을 확인하며 다음 전열을 개선합니다.',
    'taikyoku.screens.kicker': 'Battleline',
    'taikyoku.screens.title': '전열을 설계하고 검증하세요',
    'taikyoku.screens.intro': '상점에서 선택한 부대가 실제 전장에서 어떤 결과를 만드는지 한 판마다 확인할 수 있습니다.',
    'taikyoku.offlineAlt': '대국전열: 오토 배틀러 상대 선택 화면',
    'taikyoku.shopAlt': '대국전열: 오토 배틀러 상점 화면',
    'taikyoku.about.title': '배치가 전투를 바꾸는 오토 배틀러',
    'taikyoku.about.body': '대국전열: 오토 배틀러는 준비 단계의 선택을 전투 결과로 검증하는 전략 게임입니다. 부대 역할, 룬, 상점 선택, 상대 덱 정보를 조합해 더 오래 살아남는 전열을 만들어 보세요.',
  },
  ja: {
    'meta.index.title': 'Gosuni2025 - 現顕記録戦とアプリ・ゲーム',
    'meta.index.description': 'Gosuni2025のストア配信4作品と、itch.ioですぐ遊べるブラウザゲーム・デモ9作品を紹介します。',
    'meta.zombie.title': 'Zombie Defense - 最後の防衛線',
    'meta.zombie.description': 'ゾンビアポカリプスを生き延びよう。戦略ディフェンスゲーム Zombie Defense をApp StoreとONE Storeでダウンロードできます。',
    'meta.manual.title': 'Manual Rice Sorting - 米粒仕分けパズル',
    'meta.manual.description': '円を広げて米粒をつかみ、色ごとのゴールへ運ぶiOS・Android向け物理カジュアルパズル Manual Rice Sorting の公式ページです。',
    'meta.taikyoku.title': 'Taikyoku Battleline: Auto Battler - 戦略オートバトラー',
    'meta.taikyoku.description': '大きな戦列に部隊を配置し、自動戦闘で勝負するiPhone向け戦略オートバトラー、Taikyoku Battleline: Auto Battlerの公式ページです。',
    'meta.manifestation.title': '現顕記録戦 - 都市怪異カードバトル',
    'meta.manifestation.description': '2020年代の東アジア風都市ファンタジーで、事件記録と対応カードを組み合わせて戦う「現顕記録戦」の公式ページです。',
    'zombie.screenshotAlt': 'Zombie Defenseのゲーム画面',
    'home.nav.apps': 'アプリ',
    'home.nav.explore': '見る',
    'home.hero.kicker': 'Gosuni2025 Apps',
    'home.hero.title': '小さく、くっきりしたゲームを作ります',
    'home.hero.subtitle': '都市怪異カードバトルから、戦列を組むオートバトラー、ゾンビ防衛、米粒仕分けパズルまで、4つの遊びを届けます。',
    'home.apps.kicker': 'Released Apps',
    'home.apps.title': '4つのアプリ、4つの遊び',
    'home.apps.intro': 'Gosuni2025が配信したゲームの紹介とストアリンクをまとめて確認できます。',
    'home.card.detail': '詳しく見る',
    'index.taikyoku.iconAlt': 'Taikyoku Battleline: Auto Battlerアイコン',
    'index.taikyoku.screenshotAlt': 'Taikyoku Battleline: Auto Battlerのゲーム画面',
    'index.taikyoku.status': 'iOSで配信中',
    'index.taikyoku.title': 'Taikyoku Battleline: Auto Battler',
    'index.taikyoku.description': '大きな戦列に部隊を配置し、自動戦闘の結果で勝負する戦略オートバトラーです。',
    'index.manifestation.iconAlt': '現顕記録戦のアイコン',
    'index.manifestation.screenshotAlt': '現顕記録戦のカードバトル画面',
    'index.manifestation.status': 'iOSで配信中',
    'index.manifestation.title': '現顕記録戦',
    'index.manifestation.subtitle': '都市怪異カードバトル',
    'index.manifestation.description': '2020年代の東アジア風都市ファンタジーを舞台に、事件記録と対応カードを集めてデッキを組むモバイルカードバトラーです。',
    'index.manifestation.appStoreCta': 'App Storeで見る',
    'manifestation.hero.kicker': 'iOSで配信中',
    'manifestation.hero.subtitle': '2020年代の東アジア風都市ファンタジーで、事件記録と対応カードを組み合わせてデッキを作る都市怪異カードバトルです。',
    'manifestation.features.title': 'ゲームの特徴',
    'manifestation.feature.records.title': '事件記録と対応カード',
    'manifestation.feature.records.body': '都市で起きる怪異事件を記録として集め、状況に合う対応カードを選んで戦闘に備えます。',
    'manifestation.feature.deck.title': 'キャラクター・呪文・装備・遺物・領域',
    'manifestation.feature.deck.body': '5種類のカードを組み合わせて自分だけのデッキを作り、事件ごとに新しい対応を見つけましょう。',
    'manifestation.feature.battle.title': '直感的なカード配置バトル',
    'manifestation.feature.battle.body': 'カードを戦場に配置し、効果が連なる流れを読みながら都市怪異に立ち向かいます。',
    'manifestation.screens.kicker': 'Card Battle',
    'manifestation.screens.title': '事件を記録し、対応する',
    'manifestation.screens.intro': '集めた事件記録と対応カードでデッキを作り、直感的なカード配置バトルで戦略を試しましょう。',
    'manifestation.battleAlt': '現顕記録戦のカード配置バトル画面',
    'manifestation.battle.caption': '事件記録と対応カードを配置し、相手の記録を崩す戦闘画面',
    'manifestation.guide.kicker': 'Play Guide',
    'manifestation.guide.title': '記録を読み、対応しよう',
    'manifestation.guide.intro': '事件記録を確認し、状況に合うカードを選んで、ターンごとに対応を重ねましょう。',
    'manifestation.guide.battle.title': 'カードを配置してターン終了',
    'manifestation.guide.battle.body': '使うカードを選んで戦場に配置し、ターンを終了します。カード効果と相手の対応を読むことが重要です。',
    'manifestation.guide.platform.title': 'iOSでプレイ',
    'manifestation.guide.platform.body': '現顕記録戦はiOSで配信中です。オンライン機能の利用にはネットワーク接続が必要です。',
    'manifestation.guide.support.title': '不具合・利用に関するお問い合わせ',
    'manifestation.guide.support.body': 'お問い合わせの際は、アプリ名、使用端末、問題が発生した時刻をお知らせいただくと確認がスムーズです。',
    'manifestation.about.title': '記録とカードで都市怪異に挑む',
    'manifestation.about.body': '現顕記録戦は、2020年代の東アジア風都市ファンタジーを舞台にしたカードバトルゲームです。キャラクター、呪文、装備、遺物、領域カードでデッキを組み、事件記録に潜む怪異へ対応しましょう。',
    'timeline.kicker': 'Company Timeline',
    'timeline.title': 'リリースへ続く小さな記録',
    'timeline.intro': 'Gosuni2025が各ストアへ届けた4作品の歩みを時系列でご覧ください。',
    'timeline.zombie': 'Zombie DefenseがiOSとONE Storeで最初の防衛線を開きました。',
    'timeline.manual': 'Manual Rice SortingがiOSとAndroidに、手触りを楽しむ米粒仕分けパズルを届けました。',
    'timeline.taikyoku': 'Taikyoku Battleline: Auto BattlerがiOSで大きな戦列と自動戦闘を展開しました。',
    'timeline.manifestation': '現顕記録戦がApp Storeで配信を開始し、都市怪異カードバトルの記録を刻み始めました。',
    'timeline.latest': '最新リリース',
    'timeline.releaseLabel': 'リリース',
    'manual.nav.video': '動画',
    'manual.hero.kicker': 'iOS · Android配信中',
    'manual.hero.subtitle': '指で広がる円を操作して米粒をつかみ、色ごとのゴールへ運ぶ物理カジュアルパズルです。',
    'manual.features.title': 'ゲームの特徴',
    'manual.feature.control.title': '円を広げる操作',
    'manual.feature.control.body': 'タッチとマウスに対応し、円の大きさと動きで米粒を直接拾い上げます。',
    'manual.feature.sort.title': '色ごとの仕分け',
    'manual.feature.sort.body': 'ステージが進むほど、より多くの米粒と色の組み合わせを素早く見分ける必要があります。',
    'manual.feature.score.title': '短く繰り返す記録',
    'manual.feature.score.body': 'スコア、コンボ、ベスト記録、サウンドフィードバックで短いプレイを気持ちよく重ねられます。',
    'manual.video.kicker': 'Gameplay',
    'manual.video.title': 'プレイ動画',
    'manual.video.intro': '実際の米粒仕分けの流れを短い動画で確認できます。',
    'manual.about.title': '米粒を直接運ぶ手触り',
    'manual.about.body': 'Manual Rice Sortingは、シンプルなルールの中で細かなドラッグ感を繰り返し楽しむカジュアルパズルです。色を見て、円を広げ、ゴールへ正確に置く小さなループに集中しました。',
    'taikyoku.hero.kicker': 'iOSで配信中',
    'taikyoku.hero.subtitle': '広い戦場に部隊を配置し、ショップとシナジーで戦列を整え、自動戦闘の結果を見守る戦略オートバトラーです。',
    'taikyoku.features.title': 'ゲームの特徴',
    'taikyoku.feature.line.title': '大きなボードの戦列',
    'taikyoku.feature.line.body': '広い戦場にユニットを置き、移動と攻撃範囲を考えながら次の戦闘を準備します。',
    'taikyoku.feature.shop.title': 'ショップとシナジー',
    'taikyoku.feature.shop.body': 'ショップ選択、ルーン、役割の組み合わせで毎回違う部隊構成を作ります。',
    'taikyoku.feature.battle.title': '自動戦闘と記録',
    'taikyoku.feature.battle.body': '戦闘開始後は結果を確認し、ログや相手デッキを見ながら次の戦列を改善します。',
    'taikyoku.screens.kicker': 'Battleline',
    'taikyoku.screens.title': '戦列を設計し、検証する',
    'taikyoku.screens.intro': 'ショップで選んだ部隊が実際の戦場でどんな結果を生むか、毎回確認できます。',
    'taikyoku.offlineAlt': 'Taikyoku Battleline: Auto Battlerの相手選択画面',
    'taikyoku.shopAlt': 'Taikyoku Battleline: Auto Battlerのショップ画面',
    'taikyoku.about.title': '配置が戦闘を変えるオートバトラー',
    'taikyoku.about.body': 'Taikyoku Battleline: Auto Battlerは、準備段階の選択を戦闘結果で検証する戦略ゲームです。部隊の役割、ルーン、ショップ選択、相手デッキ情報を組み合わせ、より長く生き残る戦列を作りましょう。',
  },
  'zh-CN': {
    'meta.index.title': 'Gosuni2025 - 显现记录战与应用游戏',
    'meta.index.description': 'Gosuni2025 官方网站，介绍 4 款商店发行作品和 9 款可在 itch.io 直接游玩的浏览器游戏与演示。',
    'meta.zombie.title': 'Zombie Defense - 最后的防线',
    'meta.zombie.description': '在僵尸末日中生存下来。在 App Store 和 ONE Store 下载策略防守游戏 Zombie Defense。',
    'meta.manual.title': 'Manual Rice Sorting - 米粒分类益智游戏',
    'meta.manual.description': 'Manual Rice Sorting 是一款 iOS 和 Android 物理休闲益智游戏，放大圆圈抓取米粒，并移动到对应颜色目标区。',
    'meta.taikyoku.title': 'Taikyoku Battleline: Auto Battler - 策略自动战斗',
    'meta.taikyoku.description': 'Taikyoku Battleline: Auto Battler 是一款 iPhone 策略自动战斗游戏，在巨大战线中布置部队并通过自动战斗决胜。',
    'meta.manifestation.title': '显现记录战 - 都市怪异卡牌对战',
    'meta.manifestation.description': '显现记录战官方网站：在2020年代东亚风都市奇幻世界中，使用事件记录与应对卡牌构筑牌组并展开战斗。',
    'zombie.screenshotAlt': 'Zombie Defense 游戏画面',
    'home.nav.apps': '应用',
    'home.nav.explore': '浏览',
    'home.hero.kicker': 'Gosuni2025 Apps',
    'home.hero.title': '制作小而清晰的游戏',
    'home.hero.subtitle': '从都市怪异卡牌对战，到编排战线的自动战斗、僵尸防守和米粒分类益智游戏，带来四种独特玩法。',
    'home.apps.kicker': 'Released Apps',
    'home.apps.title': '四款应用，各有玩法',
    'home.apps.intro': '集中查看 Gosuni2025 已发布游戏的介绍与商店链接。',
    'home.card.detail': '查看详情',
    'index.taikyoku.iconAlt': 'Taikyoku Battleline: Auto Battler 图标',
    'index.taikyoku.screenshotAlt': 'Taikyoku Battleline: Auto Battler 游戏画面',
    'index.taikyoku.status': 'iOS 已发布',
    'index.taikyoku.title': 'Taikyoku Battleline: Auto Battler',
    'index.taikyoku.description': '在巨大战线中布置部队，并通过自动战斗结果决胜的策略自动战斗游戏。',
    'index.manifestation.iconAlt': '显现记录战图标',
    'index.manifestation.screenshotAlt': '显现记录战卡牌对战画面',
    'index.manifestation.status': 'iOS 已发布',
    'index.manifestation.title': '显现记录战',
    'index.manifestation.subtitle': '都市怪异卡牌对战',
    'index.manifestation.description': '以2020年代东亚风都市奇幻为背景，收集事件记录与应对卡牌并构筑牌组的移动卡牌对战游戏。',
    'index.manifestation.appStoreCta': '前往 App Store',
    'manifestation.hero.kicker': 'iOS 已发布',
    'manifestation.hero.subtitle': '在2020年代东亚风都市奇幻世界中，使用事件记录与应对卡牌构筑牌组的都市怪异卡牌对战游戏。',
    'manifestation.features.title': '游戏特色',
    'manifestation.feature.records.title': '事件记录与应对卡牌',
    'manifestation.feature.records.body': '收集都市怪异事件记录，选择符合当前状况的应对卡牌，为战斗做好准备。',
    'manifestation.feature.deck.title': '角色、法术、装备、遗物与区域',
    'manifestation.feature.deck.body': '组合五类卡牌构筑专属牌组，在每起事件中寻找新的应对方式。',
    'manifestation.feature.battle.title': '直观的卡牌放置战斗',
    'manifestation.feature.battle.body': '将卡牌放置在战场上，判断效果衔接的流程，对抗都市怪异。',
    'manifestation.screens.kicker': 'Card Battle',
    'manifestation.screens.title': '记录事件，采取应对',
    'manifestation.screens.intro': '用收集的事件记录与应对卡牌构筑牌组，在直观的卡牌放置战斗中验证策略。',
    'manifestation.battleAlt': '显现记录战卡牌放置战斗画面',
    'manifestation.battle.caption': '放置事件记录与应对卡牌，击破对手记录的战斗画面',
    'manifestation.guide.kicker': 'Play Guide',
    'manifestation.guide.title': '阅读记录，采取应对',
    'manifestation.guide.intro': '查看事件记录，选择符合当前状况的卡牌，逐回合采取应对。',
    'manifestation.guide.battle.title': '选择卡牌，放置并结束回合',
    'manifestation.guide.battle.body': '选择要使用的卡牌并放置到战场，然后结束回合。关键是判断卡牌效果与对手的应对。',
    'manifestation.guide.platform.title': '在 iOS 上游玩',
    'manifestation.guide.platform.body': '显现记录战已在 iOS 发布。使用在线功能需要网络连接。',
    'manifestation.guide.support.title': '错误与使用咨询',
    'manifestation.guide.support.body': '咨询错误时，请提供应用名称、使用设备和问题发生时间，以便更快确认。',
    'manifestation.about.title': '用记录与卡牌对抗都市怪异',
    'manifestation.about.body': '显现记录战是一款以2020年代东亚风都市奇幻为背景的卡牌对战游戏。组合角色、法术、装备、遗物和区域卡牌构筑牌组，应对事件记录中的怪异。',
    'timeline.kicker': 'Company Timeline',
    'timeline.title': '通往发布的小小记录',
    'timeline.intro': '按时间顺序查看 Gosuni2025 在各商店推出四款游戏的历程。',
    'timeline.zombie': 'Zombie Defense 在 iOS 与 ONE Store 上筑起了第一道防线。',
    'timeline.manual': 'Manual Rice Sorting 在 iOS 与 Android 上带来了注重手感的米粒分类益智体验。',
    'timeline.taikyoku': 'Taikyoku Battleline: Auto Battler 在 iOS 上展开了大型战线与自动战斗。',
    'timeline.manifestation': '显现记录战登陆 App Store，开启都市怪异卡牌对战的新记录。',
    'timeline.latest': '最新发布',
    'timeline.releaseLabel': '发布',
    'manual.nav.video': '视频',
    'manual.hero.kicker': 'iOS · Android 已发布',
    'manual.hero.subtitle': '用手指控制不断变大的圆圈，抓取米粒并移动到对应颜色目标区的物理休闲益智游戏。',
    'manual.features.title': '游戏特色',
    'manual.feature.control.title': '扩大圆圈操作',
    'manual.feature.control.body': '支持触控和鼠标，通过圆圈大小和移动直接抓取米粒。',
    'manual.feature.sort.title': '按颜色分类',
    'manual.feature.sort.body': '关卡越高，需要越快地区分更多米粒和颜色组合。',
    'manual.feature.score.title': '短时间反复挑战',
    'manual.feature.score.body': '分数、连击、最高纪录保存和声音反馈，让短局游戏更清晰。',
    'manual.video.kicker': 'Gameplay',
    'manual.video.title': '玩法视频',
    'manual.video.intro': '通过短视频查看实际米粒分类流程。',
    'manual.about.title': '亲手移动米粒的手感',
    'manual.about.body': 'Manual Rice Sorting 是一款在简单规则中反复享受细腻拖拽感的休闲益智游戏。核心体验是看颜色、扩大圆圈，并准确放入目标区域。',
    'taikyoku.hero.kicker': 'iOS 已发布',
    'taikyoku.hero.subtitle': '在广阔战场上布置部队，通过商店和协同强化战线，然后观看自动战斗结果的策略自动战斗游戏。',
    'taikyoku.features.title': '游戏特色',
    'taikyoku.feature.line.title': '大棋盘上的战线',
    'taikyoku.feature.line.body': '在广阔战场上放置单位，并结合移动与攻击范围准备下一场战斗。',
    'taikyoku.feature.shop.title': '商店与协同',
    'taikyoku.feature.shop.body': '通过商店选择、符文和角色组合，每局打造不同的队伍。',
    'taikyoku.feature.battle.title': '自动战斗与记录',
    'taikyoku.feature.battle.body': '战斗开始后查看结果，通过日志和对手卡组改进下一次战线。',
    'taikyoku.screens.kicker': 'Battleline',
    'taikyoku.screens.title': '设计并验证战线',
    'taikyoku.screens.intro': '每局都可以确认商店选择的部队在实际战场上会产生怎样的结果。',
    'taikyoku.offlineAlt': 'Taikyoku Battleline: Auto Battler 对手选择画面',
    'taikyoku.shopAlt': 'Taikyoku Battleline: Auto Battler 商店画面',
    'taikyoku.about.title': '布阵会改变战斗的自动战斗游戏',
    'taikyoku.about.body': 'Taikyoku Battleline: Auto Battler 是一款用战斗结果验证准备阶段选择的策略游戏。组合部队角色、符文、商店选择和对手卡组信息，打造能存活更久的战线。',
    'brand.streaming.title': '游戏直播与收益化指南',
    'brand.streaming.heading': '关于 Gosuni2025 游戏实况、视频发布和直播',
    'brand.streaming.intro': 'Gosuni2025 欢迎对本站介绍的游戏进行实况、评测、攻略、剪辑、直播和截图分享。无论个人或公司，都不需要事先许可或联系。',
    'brand.streaming.scope.title': '允许范围',
    'brand.streaming.scope.body': '可在 YouTube、Twitch、X、TikTok、哔哩哔哩、Niconico 等视频和直播平台自由发布游玩视频、实况、短视频和截图。',
    'brand.streaming.monetization.title': '收益化',
    'brand.streaming.monetization.body': '允许通过各平台的合作伙伴计划、广告收入、打赏、会员、赞助直播等方式获得收益。',
    'brand.streaming.spoiler.title': '剧透',
    'brand.streaming.spoiler.body': '允许发布包含剧透的内容。涉及核心结局或隐藏要素时，建议在标题、缩略图或说明中标注“含剧透”。',
    'brand.streaming.credit.title': '标注说明',
    'brand.streaming.credit.body': '如方便，请在视频说明或直播画面中标注游戏名、官方网站以及 App Store 等商店链接。',
  },
  'zh-TW': {
    'meta.index.title': 'Gosuni2025 - 顯現記錄戰與應用遊戲',
    'meta.index.description': 'Gosuni2025 官方網站，介紹 4 款商店發行作品與 9 款可在 itch.io 直接遊玩的瀏覽器遊戲和展示。',
    'meta.zombie.title': 'Zombie Defense - 最後防線',
    'meta.zombie.description': '在殭屍末日中存活下來。在 App Store 與 ONE Store 下載策略防守遊戲 Zombie Defense。',
    'meta.manual.title': 'Manual Rice Sorting - 米粒分類益智遊戲',
    'meta.manual.description': 'Manual Rice Sorting 是 iOS 與 Android 物理休閒益智遊戲，放大圓圈抓取米粒，並移動到對應顏色目標區。',
    'meta.taikyoku.title': 'Taikyoku Battleline: Auto Battler - 策略自動戰鬥',
    'meta.taikyoku.description': 'Taikyoku Battleline: Auto Battler 是 iPhone 策略自動戰鬥遊戲，在巨大戰線中配置部隊並透過自動戰鬥決勝。',
    'meta.manifestation.title': '顯現記錄戰 - 都市怪異卡牌對戰',
    'meta.manifestation.description': '顯現記錄戰官方頁面：在2020年代東亞風都市奇幻世界中，使用事件記錄與應對卡牌構築牌組並展開戰鬥。',
    'zombie.screenshotAlt': 'Zombie Defense 遊戲畫面',
    'home.nav.apps': '應用',
    'home.nav.explore': '瀏覽',
    'home.hero.kicker': 'Gosuni2025 Apps',
    'home.hero.title': '製作小而清晰的遊戲',
    'home.hero.subtitle': '從都市怪異卡牌對戰，到編排戰線的自動戰鬥、殭屍防守和米粒分類益智遊戲，帶來四種獨特玩法。',
    'home.apps.kicker': 'Released Apps',
    'home.apps.title': '四款應用，各有玩法',
    'home.apps.intro': '集中查看 Gosuni2025 已發行遊戲的介紹與商店連結。',
    'home.card.detail': '查看詳情',
    'index.taikyoku.iconAlt': 'Taikyoku Battleline: Auto Battler 圖示',
    'index.taikyoku.screenshotAlt': 'Taikyoku Battleline: Auto Battler 遊戲畫面',
    'index.taikyoku.status': 'iOS 已發布',
    'index.taikyoku.title': 'Taikyoku Battleline: Auto Battler',
    'index.taikyoku.description': '在巨大戰線中配置部隊，並透過自動戰鬥結果決勝的策略自動戰鬥遊戲。',
    'index.manifestation.iconAlt': '顯現記錄戰圖示',
    'index.manifestation.screenshotAlt': '顯現記錄戰卡牌對戰畫面',
    'index.manifestation.status': 'iOS 已發布',
    'index.manifestation.title': '顯現記錄戰',
    'index.manifestation.subtitle': '都市怪異卡牌對戰',
    'index.manifestation.description': '以2020年代東亞風都市奇幻為背景，蒐集事件記錄與應對卡牌並構築牌組的行動卡牌對戰遊戲。',
    'index.manifestation.appStoreCta': '前往 App Store',
    'manifestation.hero.kicker': 'iOS 已發布',
    'manifestation.hero.subtitle': '在2020年代東亞風都市奇幻世界中，使用事件記錄與應對卡牌構築牌組的都市怪異卡牌對戰遊戲。',
    'manifestation.features.title': '遊戲特色',
    'manifestation.feature.records.title': '事件記錄與應對卡牌',
    'manifestation.feature.records.body': '蒐集都市怪異事件記錄，選擇符合當前狀況的應對卡牌，為戰鬥做好準備。',
    'manifestation.feature.deck.title': '角色、法術、裝備、遺物與區域',
    'manifestation.feature.deck.body': '組合五類卡牌構築專屬牌組，在每起事件中尋找新的應對方式。',
    'manifestation.feature.battle.title': '直覺的卡牌配置戰鬥',
    'manifestation.feature.battle.body': '將卡牌配置在戰場上，判斷效果銜接的流程，對抗都市怪異。',
    'manifestation.screens.kicker': 'Card Battle',
    'manifestation.screens.title': '記錄事件，採取應對',
    'manifestation.screens.intro': '用蒐集的事件記錄與應對卡牌構築牌組，在直覺的卡牌配置戰鬥中驗證策略。',
    'manifestation.battleAlt': '顯現記錄戰卡牌配置戰鬥畫面',
    'manifestation.battle.caption': '配置事件記錄與應對卡牌，擊破對手記錄的戰鬥畫面',
    'manifestation.guide.kicker': 'Play Guide',
    'manifestation.guide.title': '閱讀記錄，採取應對',
    'manifestation.guide.intro': '查看事件記錄，選擇符合當前狀況的卡牌，逐回合採取應對。',
    'manifestation.guide.battle.title': '選擇卡牌，配置並結束回合',
    'manifestation.guide.battle.body': '選擇要使用的卡牌並配置到戰場，然後結束回合。關鍵是判斷卡牌效果與對手的應對。',
    'manifestation.guide.platform.title': '在 iOS 上遊玩',
    'manifestation.guide.platform.body': '顯現記錄戰已在 iOS 發布。使用線上功能需要網路連線。',
    'manifestation.guide.support.title': '錯誤與使用諮詢',
    'manifestation.guide.support.body': '諮詢錯誤時，請提供應用程式名稱、使用裝置和問題發生時間，以便更快確認。',
    'manifestation.about.title': '用記錄與卡牌對抗都市怪異',
    'manifestation.about.body': '顯現記錄戰是一款以2020年代東亞風都市奇幻為背景的卡牌對戰遊戲。組合角色、法術、裝備、遺物和區域卡牌構築牌組，應對事件記錄中的怪異。',
    'timeline.kicker': 'Company Timeline',
    'timeline.title': '通往發行的小小記錄',
    'timeline.intro': '依時間順序查看 Gosuni2025 在各商店推出四款遊戲的歷程。',
    'timeline.zombie': 'Zombie Defense 在 iOS 與 ONE Store 上築起了第一道防線。',
    'timeline.manual': 'Manual Rice Sorting 在 iOS 與 Android 上帶來了重視手感的米粒分類益智體驗。',
    'timeline.taikyoku': 'Taikyoku Battleline: Auto Battler 在 iOS 上展開了大型戰線與自動戰鬥。',
    'timeline.manifestation': '顯現記錄戰登上 App Store，開啟都市怪異卡牌對戰的新記錄。',
    'timeline.latest': '最新發行',
    'timeline.releaseLabel': '發行',
    'manual.nav.video': '影片',
    'manual.hero.kicker': 'iOS · Android 已發布',
    'manual.hero.subtitle': '用手指控制不斷變大的圓圈，抓取米粒並移動到對應顏色目標區的物理休閒益智遊戲。',
    'manual.features.title': '遊戲特色',
    'manual.feature.control.title': '擴大圓圈操作',
    'manual.feature.control.body': '支援觸控與滑鼠，透過圓圈大小與移動直接抓取米粒。',
    'manual.feature.sort.title': '依顏色分類',
    'manual.feature.sort.body': '關卡越高，需要越快區分更多米粒與顏色組合。',
    'manual.feature.score.title': '短時間反覆挑戰',
    'manual.feature.score.body': '分數、連擊、最高紀錄儲存與聲音回饋，讓短局遊戲更清晰。',
    'manual.video.kicker': 'Gameplay',
    'manual.video.title': '玩法影片',
    'manual.video.intro': '透過短影片查看實際米粒分類流程。',
    'manual.about.title': '親手移動米粒的手感',
    'manual.about.body': 'Manual Rice Sorting 是一款在簡單規則中反覆享受細膩拖曳感的休閒益智遊戲。核心體驗是看顏色、擴大圓圈，並準確放入目標區域。',
    'taikyoku.hero.kicker': 'iOS 已發布',
    'taikyoku.hero.subtitle': '在廣闊戰場上配置部隊，透過商店與協同強化戰線，然後觀看自動戰鬥結果的策略自動戰鬥遊戲。',
    'taikyoku.features.title': '遊戲特色',
    'taikyoku.feature.line.title': '大棋盤上的戰線',
    'taikyoku.feature.line.body': '在廣闊戰場上放置單位，並結合移動與攻擊範圍準備下一場戰鬥。',
    'taikyoku.feature.shop.title': '商店與協同',
    'taikyoku.feature.shop.body': '透過商店選擇、符文和角色組合，每局打造不同的隊伍。',
    'taikyoku.feature.battle.title': '自動戰鬥與紀錄',
    'taikyoku.feature.battle.body': '戰鬥開始後查看結果，透過日誌和對手牌組改進下一次戰線。',
    'taikyoku.screens.kicker': 'Battleline',
    'taikyoku.screens.title': '設計並驗證戰線',
    'taikyoku.screens.intro': '每局都可以確認商店選擇的部隊在實際戰場上會產生怎樣的結果。',
    'taikyoku.offlineAlt': 'Taikyoku Battleline: Auto Battler 對手選擇畫面',
    'taikyoku.shopAlt': 'Taikyoku Battleline: Auto Battler 商店畫面',
    'taikyoku.about.title': '布陣會改變戰鬥的自動戰鬥遊戲',
    'taikyoku.about.body': 'Taikyoku Battleline: Auto Battler 是一款用戰鬥結果驗證準備階段選擇的策略遊戲。組合部隊角色、符文、商店選擇和對手牌組資訊，打造能存活更久的戰線。',
    'brand.streaming.title': '遊戲直播與收益化指南',
    'brand.streaming.heading': '關於 Gosuni2025 遊戲實況、影片發布和直播',
    'brand.streaming.intro': 'Gosuni2025 歡迎對本站介紹的遊戲進行實況、評測、攻略、剪輯、直播和截圖分享。無論個人或公司，都不需要事先許可或聯絡。',
    'brand.streaming.scope.title': '允許範圍',
    'brand.streaming.scope.body': '可在 YouTube、Twitch、X、TikTok、Bilibili、Niconico 等影片與直播平台自由發布遊玩影片、實況、短影片和截圖。',
    'brand.streaming.monetization.title': '收益化',
    'brand.streaming.monetization.body': '允許透過各平台的合作夥伴計畫、廣告收益、打賞、會員、贊助直播等方式獲得收益。',
    'brand.streaming.spoiler.title': '劇透',
    'brand.streaming.spoiler.body': '允許發布包含劇透的內容。涉及核心結局或隱藏要素時，建議在標題、縮圖或說明中標註「含劇透」。',
    'brand.streaming.credit.title': '標註說明',
    'brand.streaming.credit.body': '如方便，請在影片說明或直播畫面中標註遊戲名、官方網站以及 App Store 等商店連結。',
  },
  en: {
    'meta.index.title': 'Gosuni2025 - Manifestation Record War & Games',
    'meta.index.description': 'Discover four Gosuni2025 store releases and nine browser games and demos you can play instantly on itch.io.',
    'meta.zombie.title': 'Zombie Defense - The Last Line of Defense',
    'meta.zombie.description': 'Survive the zombie apocalypse. Download the strategy defense game Zombie Defense on the App Store and ONE Store.',
    'meta.manual.title': 'Manual Rice Sorting - Rice Sorting Puzzle',
    'meta.manual.description': 'Official page for Manual Rice Sorting, an iOS and Android physics casual puzzle where you grow a circle, pick up rice grains, and sort them by color.',
    'meta.taikyoku.title': 'Taikyoku Battleline: Auto Battler - Strategy Auto Battler',
    'meta.taikyoku.description': 'Official page for Taikyoku Battleline: Auto Battler, an iPhone strategy game where you build a large formation and settle battles automatically.',
    'meta.manifestation.title': 'Manifestation Record War - Urban Occult Card Battle',
    'meta.manifestation.description': 'The official page for Manifestation Record War, a card battler set in a 2020s East Asian-inspired urban fantasy where incident records and response cards form your deck.',
    'zombie.screenshotAlt': 'Zombie Defense gameplay screen',
    'home.nav.apps': 'Apps',
    'home.nav.explore': 'Explore',
    'home.hero.kicker': 'Gosuni2025 Apps',
    'home.hero.title': 'Small games with a clear shape',
    'home.hero.subtitle': 'From urban occult card battles to formation-building auto battles, zombie defense, and a rice sorting puzzle, discover four distinct ways to play.',
    'home.apps.kicker': 'Released Apps',
    'home.apps.title': 'Four Apps, Four Ways to Play',
    'home.apps.intro': 'Explore every released Gosuni2025 game and find its store links in one place.',
    'home.card.detail': 'View Details',
    'index.taikyoku.iconAlt': 'Taikyoku Battleline: Auto Battler icon',
    'index.taikyoku.screenshotAlt': 'Taikyoku Battleline: Auto Battler gameplay screen',
    'index.taikyoku.status': 'Now on iOS',
    'index.taikyoku.title': 'Taikyoku Battleline: Auto Battler',
    'index.taikyoku.description': 'A strategy auto battler where you place units on a large battleline and win through automated combat results.',
    'index.manifestation.iconAlt': 'Manifestation Record War icon',
    'index.manifestation.screenshotAlt': 'Manifestation Record War card battle gameplay screen',
    'index.manifestation.status': 'Now on iOS',
    'index.manifestation.title': 'Manifestation Record War',
    'index.manifestation.subtitle': 'Urban occult card battle',
    'index.manifestation.description': 'A mobile card battler set in a 2020s East Asian-inspired urban fantasy, where incident records and response cards become your deck.',
    'index.manifestation.appStoreCta': 'View on the App Store',
    'manifestation.hero.kicker': 'Now on iOS',
    'manifestation.hero.subtitle': 'An urban occult card battle set in a 2020s East Asian-inspired fantasy city, where incident records and response cards form your deck.',
    'manifestation.features.title': 'Game Features',
    'manifestation.feature.records.title': 'Incident Records and Response Cards',
    'manifestation.feature.records.body': 'Collect records of occult incidents across the city and choose the right response cards to prepare for each battle.',
    'manifestation.feature.deck.title': 'Characters, Spells, Equipment, Relics, and Territories',
    'manifestation.feature.deck.body': 'Combine five card types into your own deck and discover a new response to every incident.',
    'manifestation.feature.battle.title': 'Intuitive Card Placement Battles',
    'manifestation.feature.battle.body': 'Place cards on the field, read how their effects connect, and confront the city’s occult threats.',
    'manifestation.screens.kicker': 'Card Battle',
    'manifestation.screens.title': 'Record the Incident. Plan Your Response.',
    'manifestation.screens.intro': 'Build a deck from collected incident records and response cards, then test your strategy through intuitive card placement battles.',
    'manifestation.battleAlt': 'Manifestation Record War card placement battle screen',
    'manifestation.battle.caption': 'Battle screen where incident records and response cards are placed to break down the opponent’s record',
    'manifestation.guide.kicker': 'Play Guide',
    'manifestation.guide.title': 'Read the Record. Plan Your Response.',
    'manifestation.guide.intro': 'Review the incident record, choose cards that fit the situation, and build your response one turn at a time.',
    'manifestation.guide.battle.title': 'Select, Place, End Turn',
    'manifestation.guide.battle.body': 'Choose a card, place it on the field, and end your turn. Reading card effects and your opponent’s response is the key.',
    'manifestation.guide.platform.title': 'Available on iOS',
    'manifestation.guide.platform.body': 'Manifestation Record War is available on iOS. A network connection is required for online features.',
    'manifestation.guide.support.title': 'Errors and Support Requests',
    'manifestation.guide.support.body': 'When reporting an error, include the app name, your device, and the time it occurred so we can investigate faster.',
    'manifestation.about.title': 'Face Urban Occult Threats with Records and Cards',
    'manifestation.about.body': 'Manifestation Record War is a card battle game set in a 2020s East Asian-inspired urban fantasy. Combine character, spell, equipment, relic, and territory cards into a deck, then respond to the occult threats hidden in each incident record.',
    'timeline.kicker': 'Company Timeline',
    'timeline.title': 'A Small Record of Every Release',
    'timeline.intro': 'Follow the four games Gosuni2025 has brought to stores, from the first launch to the latest release.',
    'timeline.zombie': 'Zombie Defense opened the first line of defense on iOS and ONE Store.',
    'timeline.manual': 'Manual Rice Sorting brought its tactile rice-sorting puzzle to iOS and Android.',
    'timeline.taikyoku': 'Taikyoku Battleline: Auto Battler deployed large formations and automated combat on iOS.',
    'timeline.manifestation': 'Manifestation Record War arrived on the App Store and opened a new chapter of urban occult card battles.',
    'timeline.latest': 'Latest Release',
    'timeline.releaseLabel': 'Released',
    'manual.nav.video': 'Video',
    'manual.hero.kicker': 'Now on iOS · Android',
    'manual.hero.subtitle': 'A physics-based casual puzzle where you control a growing circle, pick up rice grains, and move them into matching color zones.',
    'manual.features.title': 'Game Features',
    'manual.feature.control.title': 'Grow the Circle',
    'manual.feature.control.body': 'Touch and mouse controls let you pick up rice grains directly with the circle’s size and movement.',
    'manual.feature.sort.title': 'Sort by Color',
    'manual.feature.sort.body': 'As stages progress, you need to quickly separate more rice grains and color combinations.',
    'manual.feature.score.title': 'Short Runs, Clear Records',
    'manual.feature.score.body': 'Scores, combos, best records, and sound feedback make each short session easy to replay.',
    'manual.video.kicker': 'Gameplay',
    'manual.video.title': 'Gameplay Video',
    'manual.video.intro': 'Watch the rice sorting flow in a short gameplay clip.',
    'manual.about.title': 'The Feel of Moving Rice by Hand',
    'manual.about.body': 'Manual Rice Sorting is a casual puzzle built around small drag motions inside simple rules. See the color, grow the circle, and place each grain in the right zone.',
    'taikyoku.hero.kicker': 'Now on iOS',
    'taikyoku.hero.subtitle': 'A strategy auto battler where you place units across a wide battlefield, refine your battleline through shops and synergies, then watch the automated combat play out.',
    'taikyoku.features.title': 'Game Features',
    'taikyoku.feature.line.title': 'Large-Board Formations',
    'taikyoku.feature.line.body': 'Place units on a wide battlefield and prepare for the next fight by reading movement and attack ranges.',
    'taikyoku.feature.shop.title': 'Shop and Synergy',
    'taikyoku.feature.shop.body': 'Build a different squad each run through shop choices, runes, and role combinations.',
    'taikyoku.feature.battle.title': 'Auto Battles and Records',
    'taikyoku.feature.battle.body': 'Once combat starts, review the result, check logs and opponent decks, and improve the next battleline.',
    'taikyoku.screens.kicker': 'Battleline',
    'taikyoku.screens.title': 'Design and Test Your Formation',
    'taikyoku.screens.intro': 'Each run shows how the squad you assembled in the shop performs on the real battlefield.',
    'taikyoku.offlineAlt': 'Taikyoku Battleline: Auto Battler opponent selection screen',
    'taikyoku.shopAlt': 'Taikyoku Battleline: Auto Battler shop screen',
    'taikyoku.about.title': 'An Auto Battler Where Placement Changes Combat',
    'taikyoku.about.body': 'Taikyoku Battleline: Auto Battler is a strategy game that tests your preparation through combat results. Combine unit roles, runes, shop choices, and opponent deck information to build a battleline that survives longer.',
    'brand.streaming.title': 'Gameplay Streaming and Monetization Guidelines',
    'brand.streaming.heading': 'For Gosuni2025 gameplay videos, posts, and live streams',
    'brand.streaming.intro': 'Gosuni2025 welcomes gameplay videos, reviews, guides, clips, live streams, and screenshot sharing for the games introduced on this site. No prior permission or contact is required, whether you are an individual or an organization.',
    'brand.streaming.scope.title': 'Allowed uses',
    'brand.streaming.scope.body': 'You may freely post gameplay videos, commentary, short clips, and screenshots on video and streaming platforms such as YouTube, Twitch, X, TikTok, and Niconico.',
    'brand.streaming.monetization.title': 'Monetization',
    'brand.streaming.monetization.body': 'Monetization through platform partner programs, ad revenue, tips, memberships, sponsored streams, and similar platform features is allowed.',
    'brand.streaming.spoiler.title': 'Spoilers',
    'brand.streaming.spoiler.body': 'Posts containing spoilers are allowed. If you cover major endings or hidden elements, we recommend marking the title, thumbnail, or description with a spoiler notice.',
    'brand.streaming.credit.title': 'Credit',
    'brand.streaming.credit.body': 'When possible, please include the game title, official page, and store links such as the App Store in the video description or on the stream screen.',
  },
  es: {
    'meta.index.title': 'Gosuni2025 - Guerra de registros y juegos',
    'meta.index.description': 'Descubre cuatro lanzamientos de Gosuni2025 y nueve juegos y demos para navegador que puedes jugar al instante en itch.io.',
    'meta.zombie.title': 'Zombie Defense - La última línea de defensa',
    'meta.zombie.description': 'Sobrevive al apocalipsis zombi. Descarga Zombie Defense en App Store y ONE Store.',
    'meta.manual.title': 'Manual Rice Sorting - Puzzle de clasificación de arroz',
    'meta.manual.description': 'Página oficial de Manual Rice Sorting, un puzzle casual físico para iOS y Android donde agrandas un círculo, recoges granos de arroz y los ordenas por color.',
    'meta.taikyoku.title': 'Taikyoku Battleline: Auto Battler - Auto battler estratégico',
    'meta.taikyoku.description': 'Página oficial de Taikyoku Battleline: Auto Battler, un juego estratégico para iPhone donde formas una gran línea de batalla y resuelves combates automáticos.',
    'meta.manifestation.title': 'Guerra de registros de Manifestación - Batalla urbana de cartas ocultistas',
    'meta.manifestation.description': 'Página oficial de Guerra de registros de Manifestación, un juego de cartas ambientado en una fantasía urbana inspirada en Asia Oriental de los años 2020, con registros de incidentes y cartas de respuesta.',
    'zombie.screenshotAlt': 'Pantalla de juego de Zombie Defense',
    'home.nav.apps': 'Apps',
    'home.nav.explore': 'Explorar',
    'home.hero.kicker': 'Gosuni2025 Apps',
    'home.hero.title': 'Juegos pequeños con forma clara',
    'home.hero.subtitle': 'Desde batallas de cartas ocultistas urbanas hasta auto batallas de formación, defensa zombi y un puzzle de arroz: cuatro formas distintas de jugar.',
    'home.apps.kicker': 'Released Apps',
    'home.apps.title': 'Cuatro apps, cuatro formas de jugar',
    'home.apps.intro': 'Explora todos los juegos publicados por Gosuni2025 y encuentra sus enlaces de tienda en un solo lugar.',
    'home.card.detail': 'Ver detalles',
    'index.taikyoku.iconAlt': 'Ícono de Taikyoku Battleline: Auto Battler',
    'index.taikyoku.screenshotAlt': 'Pantalla de juego de Taikyoku Battleline: Auto Battler',
    'index.taikyoku.status': 'Disponible en iOS',
    'index.taikyoku.title': 'Taikyoku Battleline: Auto Battler',
    'index.taikyoku.description': 'Un auto battler estratégico donde colocas unidades en una gran línea de batalla y ganas por resultados de combate automático.',
    'index.manifestation.iconAlt': 'Ícono de Guerra de registros de Manifestación',
    'index.manifestation.screenshotAlt': 'Pantalla de batalla de cartas de Guerra de registros de Manifestación',
    'index.manifestation.status': 'Disponible en iOS',
    'index.manifestation.title': 'Guerra de registros de Manifestación',
    'index.manifestation.subtitle': 'Batalla de cartas ocultista urbana',
    'index.manifestation.description': 'Un juego móvil de cartas ambientado en una fantasía urbana inspirada en Asia Oriental de los años 2020, donde los registros de incidentes y las cartas de respuesta forman tu mazo.',
    'index.manifestation.appStoreCta': 'Ver en App Store',
    'manifestation.hero.kicker': 'Disponible en iOS',
    'manifestation.hero.subtitle': 'Una batalla urbana de cartas ocultistas ambientada en una fantasía inspirada en Asia Oriental de los años 2020, donde los registros de incidentes y las cartas de respuesta forman tu mazo.',
    'manifestation.features.title': 'Características',
    'manifestation.feature.records.title': 'Registros de incidentes y cartas de respuesta',
    'manifestation.feature.records.body': 'Reúne registros de incidentes ocultistas de la ciudad y elige las cartas de respuesta adecuadas para cada combate.',
    'manifestation.feature.deck.title': 'Personajes, hechizos, equipo, reliquias y territorios',
    'manifestation.feature.deck.body': 'Combina cinco tipos de cartas para crear tu propio mazo y descubre una respuesta nueva para cada incidente.',
    'manifestation.feature.battle.title': 'Combates intuitivos de colocación de cartas',
    'manifestation.feature.battle.body': 'Coloca cartas en el campo, interpreta cómo se enlazan sus efectos y enfréntate a las amenazas ocultistas de la ciudad.',
    'manifestation.screens.kicker': 'Card Battle',
    'manifestation.screens.title': 'Registra el incidente. Prepara tu respuesta.',
    'manifestation.screens.intro': 'Crea un mazo con registros de incidentes y cartas de respuesta, y prueba tu estrategia en combates intuitivos de colocación de cartas.',
    'manifestation.battleAlt': 'Pantalla de combate con colocación de cartas de Guerra de registros de Manifestación',
    'manifestation.battle.caption': 'Pantalla de combate donde colocas registros de incidentes y cartas de respuesta para derribar el registro rival',
    'manifestation.guide.kicker': 'Guía de juego',
    'manifestation.guide.title': 'Lee el registro y prepara tu respuesta',
    'manifestation.guide.intro': 'Revisa el registro del incidente, elige cartas adecuadas para la situación y responde turno a turno.',
    'manifestation.guide.battle.title': 'Selecciona, coloca y termina el turno',
    'manifestation.guide.battle.body': 'Elige una carta, colócala en el campo y termina tu turno. La clave está en interpretar sus efectos y la respuesta rival.',
    'manifestation.guide.platform.title': 'Disponible en iOS',
    'manifestation.guide.platform.body': 'Guerra de registros de Manifestación está disponible en iOS. Las funciones en línea requieren conexión de red.',
    'manifestation.guide.support.title': 'Errores y consultas de soporte',
    'manifestation.guide.support.body': 'Al informar de un error, incluye el nombre de la app, tu dispositivo y la hora en que ocurrió para facilitar la revisión.',
    'manifestation.about.title': 'Enfréntate a lo oculto con registros y cartas',
    'manifestation.about.body': 'Guerra de registros de Manifestación es un juego de cartas ambientado en una fantasía urbana inspirada en Asia Oriental de los años 2020. Combina cartas de personajes, hechizos, equipo, reliquias y territorios, y responde a las amenazas ocultistas de cada registro de incidente.',
    'timeline.kicker': 'Company Timeline',
    'timeline.title': 'Un pequeño registro de cada lanzamiento',
    'timeline.intro': 'Sigue el recorrido de los cuatro juegos que Gosuni2025 ha llevado a las tiendas, desde el primero hasta el más reciente.',
    'timeline.zombie': 'Zombie Defense abrió la primera línea de defensa en iOS y ONE Store.',
    'timeline.manual': 'Manual Rice Sorting llevó su puzzle táctil de clasificación de arroz a iOS y Android.',
    'timeline.taikyoku': 'Taikyoku Battleline: Auto Battler desplegó grandes formaciones y combates automáticos en iOS.',
    'timeline.manifestation': 'Guerra de registros de Manifestación llegó a App Store y abrió un nuevo capítulo de batallas de cartas ocultistas urbanas.',
    'timeline.latest': 'Último lanzamiento',
    'timeline.releaseLabel': 'Lanzamiento',
    'manual.nav.video': 'Video',
    'manual.hero.kicker': 'Disponible en iOS · Android',
    'manual.hero.subtitle': 'Un puzzle casual basado en física donde controlas un círculo que crece, recoges granos de arroz y los llevas a zonas del mismo color.',
    'manual.features.title': 'Características',
    'manual.feature.control.title': 'Agrandar el círculo',
    'manual.feature.control.body': 'Los controles táctiles y de mouse permiten recoger granos con el tamaño y movimiento del círculo.',
    'manual.feature.sort.title': 'Ordenar por color',
    'manual.feature.sort.body': 'A medida que avanzan las fases, debes separar más granos y combinaciones de color con rapidez.',
    'manual.feature.score.title': 'Partidas cortas, récords claros',
    'manual.feature.score.body': 'Puntuación, combos, mejores marcas y sonido hacen que cada partida breve invite a repetir.',
    'manual.video.kicker': 'Gameplay',
    'manual.video.title': 'Video de juego',
    'manual.video.intro': 'Mira el flujo de clasificación de arroz en un video corto.',
    'manual.about.title': 'La sensación de mover arroz a mano',
    'manual.about.body': 'Manual Rice Sorting es un puzzle casual centrado en pequeños gestos de arrastre dentro de reglas simples. Mira el color, agranda el círculo y coloca cada grano en la zona correcta.',
    'taikyoku.hero.kicker': 'Disponible en iOS',
    'taikyoku.hero.subtitle': 'Un auto battler estratégico donde colocas unidades en un campo amplio, mejoras tu línea con tiendas y sinergias, y ves cómo se resuelve el combate automático.',
    'taikyoku.features.title': 'Características',
    'taikyoku.feature.line.title': 'Formaciones en tablero grande',
    'taikyoku.feature.line.body': 'Coloca unidades en un campo amplio y prepara la siguiente pelea leyendo movimientos y rangos de ataque.',
    'taikyoku.feature.shop.title': 'Tienda y sinergia',
    'taikyoku.feature.shop.body': 'Crea un escuadrón distinto en cada partida con elecciones de tienda, runas y combinaciones de roles.',
    'taikyoku.feature.battle.title': 'Combates automáticos y registros',
    'taikyoku.feature.battle.body': 'Cuando empieza el combate, revisa el resultado, consulta registros y mazos rivales, y mejora la siguiente línea.',
    'taikyoku.screens.kicker': 'Battleline',
    'taikyoku.screens.title': 'Diseña y prueba tu formación',
    'taikyoku.screens.intro': 'Cada partida muestra cómo funciona en el campo real el escuadrón que armaste en la tienda.',
    'taikyoku.offlineAlt': 'Pantalla de selección de rival de Taikyoku Battleline: Auto Battler',
    'taikyoku.shopAlt': 'Pantalla de tienda de Taikyoku Battleline: Auto Battler',
    'taikyoku.about.title': 'Un auto battler donde la posición cambia el combate',
    'taikyoku.about.body': 'Taikyoku Battleline: Auto Battler es un juego estratégico que pone a prueba tu preparación con resultados de combate. Combina roles de unidad, runas, elecciones de tienda e información del rival para crear una línea que sobreviva más tiempo.',
    'brand.streaming.title': 'Guía de streaming y monetización',
    'brand.streaming.heading': 'Videos, publicaciones y directos de juegos de Gosuni2025',
    'brand.streaming.intro': 'Gosuni2025 da la bienvenida a videos de gameplay, reseñas, guías, clips, directos y capturas de pantalla de los juegos presentados en este sitio. No se requiere permiso ni contacto previo, tanto para individuos como para organizaciones.',
    'brand.streaming.scope.title': 'Usos permitidos',
    'brand.streaming.scope.body': 'Puedes publicar libremente videos de gameplay, comentarios, clips cortos y capturas en plataformas de video y streaming como YouTube, Twitch, X, TikTok y Niconico.',
    'brand.streaming.monetization.title': 'Monetización',
    'brand.streaming.monetization.body': 'Se permite monetizar mediante programas de socios, ingresos por anuncios, propinas, membresías, directos patrocinados y funciones similares de cada plataforma.',
    'brand.streaming.spoiler.title': 'Spoilers',
    'brand.streaming.spoiler.body': 'Se permiten publicaciones con spoilers. Si tratas finales importantes o elementos ocultos, recomendamos indicarlo en el título, la miniatura o la descripción.',
    'brand.streaming.credit.title': 'Créditos',
    'brand.streaming.credit.body': 'Cuando sea posible, incluye el título del juego, la página oficial y enlaces de tienda como App Store en la descripción del video o en la pantalla del directo.',
  },
};

const WEB_LAB_TEXT = {
  ko: {
    'webLab.kicker': 'Browser Play Lab',
    'webLab.title': '브라우저에서 바로 여는 실험실',
    'webLab.intro': '완성된 게임부터 엔진과 런타임 프로토타입까지, 설치 없이 아홉 개의 웹 빌드를 실행해 보세요.',
    'webLab.cta': 'itch.io에서 플레이',
    'webLab.category.mystery': '미스터리 조사',
    'webLab.category.typing': '타이핑 액션',
    'webLab.category.management': '길드 운영',
    'webLab.category.cards': '카드 배틀',
    'webLab.category.vn': '비주얼 노벨 엔진',
    'webLab.category.tactics': '전술 전투',
    'webLab.category.strategy': '분기 전략',
    'webLab.category.engine': '3D 엔진 샘플',
    'webLab.category.runtime': '런타임 호환성',
    'webLab.midnight.description': '폐쇄된 연구시설의 단말기를 복구해 사건의 진실을 추적하는 미스터리 조사 게임입니다.',
    'webLab.keyweaver.description': '타일을 입력하고 미로를 엮어 폭풍 속에서 살아남는 타이핑 액션 게임입니다.',
    'webLab.guild.description': '모험가를 배치하고 의뢰와 제작 일정을 조율해 마감 전에 길드의 하루를 완성하세요.',
    'webLab.heartstone.description': '카드를 모아 덱을 구성하고 서로 다른 현현의 능력을 조합해 전투하는 브라우저 카드 배틀 데모입니다.',
    'webLab.godotvn.description': '대사, 선택지, 캐릭터 연출, 조사와 증언 UI를 한 프로젝트에서 구성한 Godot 기반 엔진 데모입니다.',
    'webLab.gritforge.description': '유닛과 스킬을 조합해 짧은 전투의 해법을 찾는 전술 전투 프로토타입입니다.',
    'webLab.tower.description': '하나의 시작점에서 여러 선택지로 분기하며 다음 방과 보상을 고르는 미니멀 전략 프로토타입입니다.',
    'webLab.engine.description': 'Gosuni Engine 웹 런타임의 3D 렌더링, 조명과 기본 씬 구성을 확인하는 샘플 프로젝트입니다.',
    'webLab.rpgmaker.description': 'RPG Maker MV 게임 데이터와 리소스를 웹에서 구동하며 기본 RPG 흐름을 확인하는 호환성 샘플입니다.',
    'webLab.midnight.alt': '보존 실패 보고서의 폐쇄 연구시설 단말기 화면',
    'webLab.keyweaver.alt': '빛나는 키 타일 위를 이동하는 Keyweaver 게임 화면',
    'webLab.guild.alt': '검과 깃펜 문장이 그려진 guild on deadline 타이틀 화면',
    'webLab.heartstone.alt': '현현 카드와 전열이 놓인 heartstone 전투 화면',
    'webLab.godotvn.alt': 'Godot 비주얼 노벨 엔진의 게임 라이브러리 화면',
    'webLab.gritforge.alt': '전투 아이콘이 놓인 GRITFORGE 전술 전투 타이틀 화면',
    'webLab.tower.alt': '두 갈래 선택 경로가 그려진 TOWER 타이틀 화면',
    'webLab.engine.alt': '조명 아래 큐브와 구가 놓인 Gosuni Engine 3D 데모 화면',
    'webLab.rpgmaker.alt': '판타지 갑옷 캐릭터가 그려진 RPG Maker MV 런타임 데모 화면',
    'home.about.services': '제공 서비스: 스토어 출시작 4종 · 브라우저 게임/데모 9종',
  },
  ja: {
    'webLab.kicker': 'Browser Play Lab',
    'webLab.title': 'ブラウザですぐ開ける実験室',
    'webLab.intro': '完成したゲームからエンジンやランタイムの試作まで、9つのウェブビルドをインストールなしで試せます。',
    'webLab.cta': 'itch.ioでプレイ',
    'webLab.category.mystery': 'ミステリー調査',
    'webLab.category.typing': 'タイピングアクション',
    'webLab.category.management': 'ギルド運営',
    'webLab.category.cards': 'カードバトル',
    'webLab.category.vn': 'ビジュアルノベルエンジン',
    'webLab.category.tactics': '戦術バトル',
    'webLab.category.strategy': '分岐型ストラテジー',
    'webLab.category.engine': '3Dエンジンサンプル',
    'webLab.category.runtime': 'ランタイム互換性',
    'webLab.midnight.description': '閉鎖された研究施設の端末を復旧し、事件の真相を追うミステリー調査ゲームです。',
    'webLab.keyweaver.description': 'タイルを入力し、迷路を編みながら嵐を生き延びるタイピングアクションです。',
    'webLab.guild.description': '冒険者を配置し、依頼と制作日程を調整して締切までにギルドの一日を完成させます。',
    'webLab.heartstone.description': 'カードを集めてデッキを組み、異なる顕現の能力を組み合わせて戦うブラウザカードバトルです。',
    'webLab.godotvn.description': '会話、選択肢、演出、調査と証言UIを一つにまとめたGodot製ビジュアルノベルエンジンのデモです。',
    'webLab.gritforge.description': 'ユニットとスキルを組み合わせ、短い戦闘の解法を探る戦術バトルのプロトタイプです。',
    'webLab.tower.description': '分岐する選択肢から次の部屋と報酬を選ぶ、ミニマルな戦略プロトタイプです。',
    'webLab.engine.description': 'Gosuni EngineのWebランタイムで3D描画、照明、基本シーンを確認できるサンプルです。',
    'webLab.rpgmaker.description': 'RPG Maker MVのデータと素材をWebで動かし、基本的なRPGの流れを確認する互換サンプルです。',
    'webLab.midnight.alt': '閉鎖研究施設の端末を映す「保存失敗報告書」の画面',
    'webLab.keyweaver.alt': '光るキータイルを進むKeyweaverのゲーム画面',
    'webLab.guild.alt': '剣と羽根ペンの紋章があるguild on deadlineのタイトル画面',
    'webLab.heartstone.alt': '顕現カードと戦列が並ぶheartstoneの戦闘画面',
    'webLab.godotvn.alt': 'Godotビジュアルノベルエンジンのゲームライブラリ画面',
    'webLab.gritforge.alt': '戦闘アイコンが並ぶGRITFORGEのタイトル画面',
    'webLab.tower.alt': '二つの分岐経路を示すTOWERのタイトル画面',
    'webLab.engine.alt': '照明下の立方体と球を映すGosuni Engine 3Dデモ',
    'webLab.rpgmaker.alt': 'ファンタジーの鎧姿を描いたRPG Maker MVランタイムデモ',
    'home.about.services': '提供サービス：ストア配信4作品・ブラウザゲーム／デモ9作品',
  },
  'zh-CN': {
    'webLab.kicker': 'Browser Play Lab',
    'webLab.title': '在浏览器中直接打开实验室',
    'webLab.intro': '从完整游戏到引擎与运行时原型，无需安装即可运行九个 Web 版本。',
    'webLab.cta': '在 itch.io 游玩',
    'webLab.category.mystery': '悬疑调查',
    'webLab.category.typing': '打字动作',
    'webLab.category.management': '公会经营',
    'webLab.category.cards': '卡牌对战',
    'webLab.category.vn': '视觉小说引擎',
    'webLab.category.tactics': '战术战斗',
    'webLab.category.strategy': '分支策略',
    'webLab.category.engine': '3D 引擎示例',
    'webLab.category.runtime': '运行时兼容性',
    'webLab.midnight.description': '修复封闭研究设施的终端，并追查事件真相的悬疑调查游戏。',
    'webLab.keyweaver.description': '输入地块、穿过迷宫并在风暴中生存的打字动作游戏。',
    'webLab.guild.description': '安排冒险者，协调委托与制作进度，在截止前完成公会的一天。',
    'webLab.heartstone.description': '收集卡牌构筑牌组，组合不同显现能力进行战斗的浏览器卡牌演示。',
    'webLab.godotvn.description': '在一个项目中整合对话、选项、角色演出、调查与证言界面的 Godot 视觉小说引擎演示。',
    'webLab.gritforge.description': '组合单位与技能，寻找短局战斗解法的战术原型。',
    'webLab.tower.description': '从起点沿不同选项分支，选择下一个房间与奖励的极简策略原型。',
    'webLab.engine.description': '展示 Gosuni Engine Web 运行时的 3D 渲染、光照与基础场景。',
    'webLab.rpgmaker.description': '在 Web 中运行 RPG Maker MV 数据与资源，并检验基础 RPG 流程的兼容示例。',
    'webLab.midnight.alt': '保存失败报告中的封闭研究设施终端画面',
    'webLab.keyweaver.alt': 'Keyweaver 角色在发光按键地块上移动的游戏画面',
    'webLab.guild.alt': '带有剑与羽毛笔徽章的 guild on deadline 标题画面',
    'webLab.heartstone.alt': '排列显现卡牌与战线的 heartstone 战斗画面',
    'webLab.godotvn.alt': 'Godot 视觉小说引擎的游戏库画面',
    'webLab.gritforge.alt': '排列战斗图标的 GRITFORGE 战术战斗标题画面',
    'webLab.tower.alt': '显示两条分支路线的 TOWER 标题画面',
    'webLab.engine.alt': '灯光下摆放立方体与球体的 Gosuni Engine 3D 演示',
    'webLab.rpgmaker.alt': '绘有奇幻盔甲角色的 RPG Maker MV 运行时演示画面',
    'home.about.services': '提供服务：4 款商店发行作品 · 9 款浏览器游戏／演示',
  },
  'zh-TW': {
    'webLab.kicker': 'Browser Play Lab',
    'webLab.title': '在瀏覽器中直接開啟實驗室',
    'webLab.intro': '從完整遊戲到引擎與執行階段原型，免安裝即可執行九個 Web 版本。',
    'webLab.cta': '在 itch.io 遊玩',
    'webLab.category.mystery': '懸疑調查',
    'webLab.category.typing': '打字動作',
    'webLab.category.management': '公會經營',
    'webLab.category.cards': '卡牌對戰',
    'webLab.category.vn': '視覺小說引擎',
    'webLab.category.tactics': '戰術戰鬥',
    'webLab.category.strategy': '分支策略',
    'webLab.category.engine': '3D 引擎範例',
    'webLab.category.runtime': '執行階段相容性',
    'webLab.midnight.description': '修復封閉研究設施的終端，並追查事件真相的懸疑調查遊戲。',
    'webLab.keyweaver.description': '輸入地塊、穿過迷宮並在風暴中生存的打字動作遊戲。',
    'webLab.guild.description': '安排冒險者，協調委託與製作進度，在截止前完成公會的一天。',
    'webLab.heartstone.description': '收集卡牌構築牌組，組合不同顯現能力進行戰鬥的瀏覽器卡牌展示。',
    'webLab.godotvn.description': '在一個專案中整合對話、選項、角色演出、調查與證言介面的 Godot 視覺小說引擎展示。',
    'webLab.gritforge.description': '組合單位與技能，尋找短局戰鬥解法的戰術原型。',
    'webLab.tower.description': '從起點沿不同選項分支，選擇下一個房間與獎勵的極簡策略原型。',
    'webLab.engine.description': '展示 Gosuni Engine Web 執行階段的 3D 渲染、光照與基礎場景。',
    'webLab.rpgmaker.description': '在 Web 中執行 RPG Maker MV 資料與資源，並檢驗基礎 RPG 流程的相容範例。',
    'webLab.midnight.alt': '保存失敗報告中的封閉研究設施終端畫面',
    'webLab.keyweaver.alt': 'Keyweaver 角色在發光按鍵地塊上移動的遊戲畫面',
    'webLab.guild.alt': '帶有劍與羽毛筆徽章的 guild on deadline 標題畫面',
    'webLab.heartstone.alt': '排列顯現卡牌與戰線的 heartstone 戰鬥畫面',
    'webLab.godotvn.alt': 'Godot 視覺小說引擎的遊戲庫畫面',
    'webLab.gritforge.alt': '排列戰鬥圖示的 GRITFORGE 戰術戰鬥標題畫面',
    'webLab.tower.alt': '顯示兩條分支路線的 TOWER 標題畫面',
    'webLab.engine.alt': '燈光下擺放立方體與球體的 Gosuni Engine 3D 展示',
    'webLab.rpgmaker.alt': '繪有奇幻盔甲角色的 RPG Maker MV 執行階段展示畫面',
    'home.about.services': '提供服務：4 款商店發行作品 · 9 款瀏覽器遊戲／展示',
  },
  en: {
    'webLab.kicker': 'Browser Play Lab',
    'webLab.title': 'Open the Lab in Your Browser',
    'webLab.intro': 'Run nine web builds without installing anything, from complete games to engine and runtime prototypes.',
    'webLab.cta': 'Play on itch.io',
    'webLab.category.mystery': 'Mystery Investigation',
    'webLab.category.typing': 'Typing Action',
    'webLab.category.management': 'Guild Management',
    'webLab.category.cards': 'Card Battle',
    'webLab.category.vn': 'Visual Novel Engine',
    'webLab.category.tactics': 'Tactical Combat',
    'webLab.category.strategy': 'Branching Strategy',
    'webLab.category.engine': '3D Engine Sample',
    'webLab.category.runtime': 'Runtime Compatibility',
    'webLab.midnight.description': 'Restore terminals in a sealed research facility and investigate the truth behind the incident.',
    'webLab.keyweaver.description': 'Type the tiles, weave through the maze, and survive the storm in this typing action game.',
    'webLab.guild.description': 'Assign adventurers and coordinate requests and crafting to finish the guild’s day before the deadline.',
    'webLab.heartstone.description': 'Collect cards, build a deck, and combine manifestation abilities in this browser card-battle demo.',
    'webLab.godotvn.description': 'A Godot visual-novel engine demo combining dialogue, choices, character direction, investigation, and testimony UI.',
    'webLab.gritforge.description': 'Combine units and skills to solve compact tactical battles in this prototype.',
    'webLab.tower.description': 'Choose the next room and reward along branching paths in this minimalist strategy prototype.',
    'webLab.engine.description': 'A sample of 3D rendering, lighting, and basic scene composition in the Gosuni Engine web runtime.',
    'webLab.rpgmaker.description': 'A compatibility sample that runs RPG Maker MV data and resources in the browser.',
    'webLab.midnight.alt': 'Sealed research-facility terminal in Preservation Failure Report',
    'webLab.keyweaver.alt': 'Keyweaver character moving across glowing key tiles',
    'webLab.guild.alt': 'guild on deadline title screen with a sword and quill crest',
    'webLab.heartstone.alt': 'heartstone battle screen with manifestation cards and formations',
    'webLab.godotvn.alt': 'Game library screen in the Godot visual-novel engine',
    'webLab.gritforge.alt': 'GRITFORGE tactical battle title screen with combat icons',
    'webLab.tower.alt': 'TOWER title screen showing two branching routes',
    'webLab.engine.alt': 'Gosuni Engine 3D demo with a cube and sphere under lights',
    'webLab.rpgmaker.alt': 'RPG Maker MV runtime demo with a fantasy armored character',
    'home.about.services': 'Services: 4 store releases · 9 browser games and demos',
  },
  es: {
    'webLab.kicker': 'Browser Play Lab',
    'webLab.title': 'Abre el laboratorio en tu navegador',
    'webLab.intro': 'Ejecuta nueve versiones web sin instalar nada, desde juegos completos hasta prototipos de motores y runtimes.',
    'webLab.cta': 'Jugar en itch.io',
    'webLab.category.mystery': 'Investigación de misterio',
    'webLab.category.typing': 'Acción y teclado',
    'webLab.category.management': 'Gestión de gremio',
    'webLab.category.cards': 'Batalla de cartas',
    'webLab.category.vn': 'Motor de novela visual',
    'webLab.category.tactics': 'Combate táctico',
    'webLab.category.strategy': 'Estrategia ramificada',
    'webLab.category.engine': 'Muestra de motor 3D',
    'webLab.category.runtime': 'Compatibilidad de runtime',
    'webLab.midnight.description': 'Restaura terminales de un centro de investigación cerrado e investiga la verdad del incidente.',
    'webLab.keyweaver.description': 'Escribe las casillas, recorre el laberinto y sobrevive a la tormenta en este juego de acción.',
    'webLab.guild.description': 'Asigna aventureros y coordina encargos y fabricación antes de que termine el plazo.',
    'webLab.heartstone.description': 'Reúne cartas, crea un mazo y combina habilidades de manifestación en esta demo de combate de cartas.',
    'webLab.godotvn.description': 'Demo de un motor de novela visual en Godot con diálogos, decisiones, dirección, investigación y testimonios.',
    'webLab.gritforge.description': 'Combina unidades y habilidades para resolver combates tácticos breves en este prototipo.',
    'webLab.tower.description': 'Elige la próxima sala y recompensa por rutas ramificadas en este prototipo de estrategia minimalista.',
    'webLab.engine.description': 'Muestra de renderizado 3D, iluminación y escenas básicas en el runtime web de Gosuni Engine.',
    'webLab.rpgmaker.description': 'Muestra de compatibilidad que ejecuta datos y recursos de RPG Maker MV en el navegador.',
    'webLab.midnight.alt': 'Terminal de un centro de investigación cerrado en Informe de fallo de conservación',
    'webLab.keyweaver.alt': 'Personaje de Keyweaver moviéndose por teclas luminosas',
    'webLab.guild.alt': 'Pantalla de guild on deadline con un emblema de espada y pluma',
    'webLab.heartstone.alt': 'Combate de heartstone con cartas de manifestación y formaciones',
    'webLab.godotvn.alt': 'Biblioteca de juegos del motor de novela visual de Godot',
    'webLab.gritforge.alt': 'Pantalla táctica de GRITFORGE con iconos de combate',
    'webLab.tower.alt': 'Pantalla de TOWER con dos rutas ramificadas',
    'webLab.engine.alt': 'Demo 3D de Gosuni Engine con cubo y esfera bajo luces',
    'webLab.rpgmaker.alt': 'Demo del runtime de RPG Maker MV con un personaje de armadura fantástica',
    'home.about.services': 'Servicios: 4 lanzamientos en tiendas · 9 juegos y demos para navegador',
  },
};

Object.entries(WEB_LAB_TEXT).forEach(([language, entries]) => {
  Object.assign(PAGE_TEXT[language], entries);
});

Object.entries(PAGE_TEXT).forEach(([language, entries]) => {
  Object.assign(TEXT[language], entries);
});

const LEGAL_SUMMARIES = {
  privacy: {
    ja: {
      label: 'Gosuni2025 Services',
      title: 'プライバシーポリシー',
      effective: '施行日: 2025年12月1日',
      intro: 'このページは、Gosuni2025が提供するアプリとゲームの個人情報の取り扱いに関する主要事項を案内する翻訳版です。法的な詳細は韓国語の原文を基準とします。',
      sections: [
        {
          title: '1. 取り扱う情報',
          boxTitle: 'ローカル保存方式',
          paragraphs: [
            'Gosuni2025のアプリとゲームは独自の会員サーバーを運営しておらず、プレイデータや設定は主に利用者の端末に保存されます。',
            'ただし、サービス提供、広告表示、利用状況の改善のため、端末情報、広告ID、IPアドレス、広告視聴記録、アプリ利用統計などが各提供元により処理される場合があります。',
          ],
        },
        {
          title: '2. 第三者サービス',
          paragraphs: ['無料アプリとゲームの提供、広告配信、サービス改善、統計分析のため、以下のサービスが使用されます。'],
          items: ['Unity Ads', 'Google AdMob', 'Firebase Analytics'],
        },
        {
          title: '3. 保存期間',
          paragraphs: ['当社は個人情報を直接保存しません。第三者サービスで処理される情報の保存期間は、各サービスのポリシーに従います。'],
        },
        {
          title: '4. 利用者の選択',
          paragraphs: ['端末設定から広告IDのリセット、削除、またはトラッキング拒否を行うことができます。'],
          items: ['Android: 設定 > Google > 広告', 'iOS: 設定 > プライバシーとセキュリティ > トラッキング'],
        },
        {
          title: '5. お問い合わせ',
          className: 'contact-info',
          paragraphs: ['個人情報に関するお問い合わせは、下記メールアドレスまでご連絡ください。', 'gosuni2025@gmail.com'],
        },
        {
          title: '6. 変更',
          paragraphs: ['本方針に変更がある場合、アプリ内のお知らせまたはホームページを通じて案内します。'],
        },
      ],
    },
    'zh-CN': {
      label: 'Gosuni2025 Services',
      title: '隐私政策',
      effective: '生效日期：2025年12月1日',
      intro: '本页是 Gosuni2025 应用和游戏隐私处理主要事项的翻译说明。法律细节以韩文原文为准。',
      sections: [
        {
          title: '1. 处理的信息',
          boxTitle: '本地保存方式',
          paragraphs: [
            'Gosuni2025 的应用和游戏不运营自有会员服务器，游玩数据和设置主要保存在用户设备本地。',
            '但为了提供服务、展示广告和改进使用体验，广告和分析服务提供商可能会处理设备信息、广告ID、IP地址、广告观看记录、应用使用统计等信息。',
          ],
        },
        {
          title: '2. 第三方服务',
          paragraphs: ['为了提供免费应用和游戏、投放广告、改进服务和进行统计分析，会使用以下服务。'],
          items: ['Unity Ads', 'Google AdMob', 'Firebase Analytics'],
        },
        {
          title: '3. 保存期限',
          paragraphs: ['公司不直接保存个人信息。第三方服务处理的信息保存期限遵循各服务自身政策。'],
        },
        {
          title: '4. 用户选择',
          paragraphs: ['用户可以在设备设置中重置、删除广告ID，或拒绝追踪。'],
          items: ['Android：设置 > Google > 广告', 'iOS：设置 > 隐私与安全性 > 跟踪'],
        },
        {
          title: '5. 联系方式',
          className: 'contact-info',
          paragraphs: ['如有隐私相关问题，请通过以下邮箱联系。', 'gosuni2025@gmail.com'],
        },
        {
          title: '6. 变更',
          paragraphs: ['本政策如有变更，将通过应用内公告或官网进行说明。'],
        },
      ],
    },
    'zh-TW': {
      label: 'Gosuni2025 Services',
      title: '隱私權政策',
      effective: '生效日：2025年12月1日',
      intro: '本頁為 Gosuni2025 應用程式與遊戲隱私處理主要事項的翻譯說明。法律細節以韓文原文為準。',
      sections: [
        {
          title: '1. 處理的資訊',
          boxTitle: '本機儲存方式',
          paragraphs: [
            'Gosuni2025 的應用程式與遊戲不營運自有會員伺服器，遊玩資料與設定主要會儲存在使用者裝置本機。',
            '但為了提供服務、顯示廣告與改善使用體驗，廣告與分析服務供應商可能會處理裝置資訊、廣告ID、IP位址、廣告觀看紀錄、應用程式使用統計等資訊。',
          ],
        },
        {
          title: '2. 第三方服務',
          paragraphs: ['為了提供免費應用程式與遊戲、投放廣告、改善服務與統計分析，會使用以下服務。'],
          items: ['Unity Ads', 'Google AdMob', 'Firebase Analytics'],
        },
        {
          title: '3. 保存期間',
          paragraphs: ['公司不直接保存個人資訊。第三方服務處理資訊的保存期間依各服務自身政策辦理。'],
        },
        {
          title: '4. 使用者選擇',
          paragraphs: ['使用者可在裝置設定中重設、刪除廣告ID，或拒絕追蹤。'],
          items: ['Android：設定 > Google > 廣告', 'iOS：設定 > 隱私權與安全性 > 追蹤'],
        },
        {
          title: '5. 聯絡方式',
          className: 'contact-info',
          paragraphs: ['如有隱私相關問題，請透過以下電子郵件聯絡。', 'gosuni2025@gmail.com'],
        },
        {
          title: '6. 變更',
          paragraphs: ['本政策如有變更，將透過應用程式內公告或官方網站說明。'],
        },
      ],
    },
    en: {
      label: 'Gosuni2025 Services',
      title: 'Privacy Policy',
      effective: 'Effective date: December 1, 2025',
      intro: 'This translated page summarizes the key privacy practices for apps and games provided by Gosuni2025. For legal details, the Korean original remains the primary notice unless a separate localized policy is provided.',
      sections: [
        {
          title: '1. Information Handled',
          boxTitle: 'Local storage model',
          paragraphs: [
            'Gosuni2025 apps and games do not operate a separate membership server, and play data or settings are mainly stored locally on the user’s device.',
            'To provide services, show ads, and improve usage, third-party advertising and analytics providers may process device information, advertising IDs, IP addresses, ad-view records, and app usage statistics.',
          ],
        },
        {
          title: '2. Third-Party Services',
          paragraphs: ['The following services are used to provide free apps and games, deliver ads, improve the service, and analyze usage.'],
          items: ['Unity Ads', 'Google AdMob', 'Firebase Analytics'],
        },
        {
          title: '3. Retention',
          paragraphs: ['The company does not directly store personal information. Retention by third-party services follows each provider’s own policy.'],
        },
        {
          title: '4. User Choices',
          paragraphs: ['Users can reset or delete the advertising ID, or limit tracking, through device settings.'],
          items: ['Android: Settings > Google > Ads', 'iOS: Settings > Privacy & Security > Tracking'],
        },
        {
          title: '5. Contact',
          className: 'contact-info',
          paragraphs: ['For privacy questions, contact us at the email address below.', 'gosuni2025@gmail.com'],
        },
        {
          title: '6. Changes',
          paragraphs: ['If this policy changes, we will provide notice in the app or on the website.'],
        },
      ],
    },
    es: {
      label: 'Gosuni2025 Services',
      title: 'Política de privacidad',
      effective: 'Fecha de entrada en vigor: 1 de diciembre de 2025',
      intro: 'Esta página traducida resume las prácticas principales de privacidad de las apps y juegos de Gosuni2025. Para los detalles legales, el texto original en coreano sigue siendo el aviso principal salvo que se publique una política localizada por separado.',
      sections: [
        {
          title: '1. Información tratada',
          boxTitle: 'Modelo de almacenamiento local',
          paragraphs: [
            'Las apps y juegos de Gosuni2025 no operan un servidor de membresía propio, y los datos de juego o ajustes se guardan principalmente de forma local en el dispositivo del usuario.',
            'Para prestar servicios, mostrar anuncios y mejorar el uso, los proveedores externos de anuncios y analítica pueden tratar información del dispositivo, ID de publicidad, direcciones IP, registros de anuncios vistos y estadísticas de uso de la app.',
          ],
        },
        {
          title: '2. Servicios de terceros',
          paragraphs: ['Se utilizan los siguientes servicios para ofrecer apps y juegos gratuitos, mostrar anuncios, mejorar el servicio y analizar estadísticas.'],
          items: ['Unity Ads', 'Google AdMob', 'Firebase Analytics'],
        },
        {
          title: '3. Conservación',
          paragraphs: ['La empresa no almacena directamente información personal. La conservación por servicios de terceros se rige por la política de cada proveedor.'],
        },
        {
          title: '4. Opciones del usuario',
          paragraphs: ['Los usuarios pueden restablecer o eliminar el ID de publicidad, o limitar el seguimiento, desde los ajustes del dispositivo.'],
          items: ['Android: Ajustes > Google > Anuncios', 'iOS: Ajustes > Privacidad y seguridad > Rastreo'],
        },
        {
          title: '5. Contacto',
          className: 'contact-info',
          paragraphs: ['Para preguntas de privacidad, contáctanos en el correo indicado abajo.', 'gosuni2025@gmail.com'],
        },
        {
          title: '6. Cambios',
          paragraphs: ['Si esta política cambia, lo informaremos en la app o en el sitio web.'],
        },
      ],
    },
  },
  terms: {
    ja: {
      label: 'Gosuni2025 Services',
      title: '利用規約',
      effective: '施行日: 2025年12月4日',
      intro: 'このページは、Gosuni2025が提供するアプリとゲームの利用規約の主要事項を案内する翻訳版です。法的な詳細は韓国語の原文を基準とします。',
      sections: [
        {
          title: '第1条 目的',
          paragraphs: ['本規約は、Gosuni2025が提供するモバイルアプリ、ゲームおよび関連サービスの利用に関する会社と利用者の権利、義務および責任事項を定めます。'],
        },
        {
          title: '第2条 サービス',
          paragraphs: ['本サービスには、アプリおよびゲームの利用、サービスごとの記録・設定・報酬、広告視聴による報酬などが含まれます。一部機能はネットワーク接続を必要とする場合があります。'],
        },
        {
          title: '第3条 利用者の義務',
          paragraphs: ['利用者はサービス運営の妨害、不正利用、ハッキング、プログラム改変、他人の個人情報侵害、知的財産権侵害、法令違反をしてはなりません。'],
        },
        {
          title: '第4条 広告と報酬',
          paragraphs: ['会社はサービス運営のため広告を掲載できます。広告視聴による報酬獲得は利用者の選択であり、必須ではありません。'],
        },
        {
          title: '第5条 ゲームデータと知的財産',
          paragraphs: ['サービスデータは該当サービス内でのみ有効で、現金に交換されません。サービス内のコンテンツに関する著作権および知的財産権は会社に帰属します。'],
        },
        {
          title: '第6条 利用年齢と制限',
          paragraphs: ['サービスごとの利用可能年齢は各ストアおよびサービス案内に従います。規約違反がある場合、会社は利用制限または契約解除を行うことがあります。'],
        },
        {
          title: '第7条 お問い合わせ',
          className: 'contact-info',
          paragraphs: ['サービス利用に関するお問い合わせは、下記メールアドレスまでご連絡ください。', 'gosuni2025@gmail.com'],
        },
      ],
    },
    'zh-CN': {
      label: 'Gosuni2025 Services',
      title: '服务条款',
      effective: '生效日期：2025年12月4日',
      intro: '本页是 Gosuni2025 应用和游戏服务条款主要事项的翻译说明。法律细节以韩文原文为准。',
      sections: [
        {
          title: '第1条 目的',
          paragraphs: ['本条款规定 Gosuni2025 提供的移动应用、游戏及相关服务使用相关的公司与用户之间的权利、义务和责任事项。'],
        },
        {
          title: '第2条 服务',
          paragraphs: ['服务包括应用和游戏使用、各服务的记录、设置、奖励以及通过观看广告获得奖励等。部分功能可能需要网络连接。'],
        },
        {
          title: '第3条 用户义务',
          paragraphs: ['用户不得干扰服务运营，不得进行异常使用、黑客攻击、程序篡改、侵犯他人个人信息、侵犯知识产权或违反相关法律。'],
        },
        {
          title: '第4条 广告与奖励',
          paragraphs: ['公司可为运营服务而展示广告。观看广告获得奖励由用户自行选择，并非强制事项。'],
        },
        {
          title: '第5条 游戏数据与知识产权',
          paragraphs: ['服务数据仅在相应服务内有效，不能兑换现金。服务中包含的内容的著作权和知识产权归公司所有。'],
        },
        {
          title: '第6条 使用年龄与限制',
          paragraphs: ['各服务的可使用年龄遵循各商店和服务说明。如用户违反条款，公司可限制使用或解除使用协议。'],
        },
        {
          title: '第7条 联系方式',
          className: 'contact-info',
          paragraphs: ['如有服务使用相关问题，请通过以下邮箱联系。', 'gosuni2025@gmail.com'],
        },
      ],
    },
    'zh-TW': {
      label: 'Gosuni2025 Services',
      title: '服務條款',
      effective: '生效日：2025年12月4日',
      intro: '本頁為 Gosuni2025 應用程式與遊戲服務條款主要事項的翻譯說明。法律細節以韓文原文為準。',
      sections: [
        {
          title: '第1條 目的',
          paragraphs: ['本條款規定 Gosuni2025 提供的行動應用程式、遊戲及相關服務使用相關之公司與使用者間權利、義務與責任事項。'],
        },
        {
          title: '第2條 服務',
          paragraphs: ['服務包含應用程式與遊戲使用、各服務的紀錄、設定、獎勵以及透過觀看廣告取得獎勵等。部分功能可能需要網路連線。'],
        },
        {
          title: '第3條 使用者義務',
          paragraphs: ['使用者不得妨礙服務營運，不得進行異常使用、駭客攻擊、程式竄改、侵害他人個人資訊、侵害智慧財產權或違反相關法令。'],
        },
        {
          title: '第4條 廣告與獎勵',
          paragraphs: ['公司可為服務營運刊登廣告。觀看廣告取得獎勵由使用者自行選擇，並非必要事項。'],
        },
        {
          title: '第5條 遊戲資料與智慧財產',
          paragraphs: ['服務資料僅於相應服務內有效，不能兌換現金。服務內內容的著作權與智慧財產權歸公司所有。'],
        },
        {
          title: '第6條 使用年齡與限制',
          paragraphs: ['各服務的可使用年齡依各商店與服務說明為準。若使用者違反條款，公司可限制使用或終止使用契約。'],
        },
        {
          title: '第7條 聯絡方式',
          className: 'contact-info',
          paragraphs: ['如有服務使用相關問題，請透過以下電子郵件聯絡。', 'gosuni2025@gmail.com'],
        },
      ],
    },
    en: {
      label: 'Gosuni2025 Services',
      title: 'Terms of Service',
      effective: 'Effective date: December 4, 2025',
      intro: 'This translated page summarizes the key terms for apps and games provided by Gosuni2025. For legal details, the Korean original remains the primary notice unless a separate localized version is provided.',
      sections: [
        {
          title: 'Article 1. Purpose',
          paragraphs: ['These terms define the rights, obligations, and responsibilities between the company and users regarding mobile apps, games, and related services provided by Gosuni2025.'],
        },
        {
          title: 'Article 2. Service',
          paragraphs: ['The service includes app and game use, service-specific records, settings, rewards, and rewards earned by watching ads. Some features may require a network connection.'],
        },
        {
          title: 'Article 3. User Obligations',
          paragraphs: ['Users must not interfere with service operation, exploit bugs, hack, modify programs, infringe personal information or intellectual property, or violate applicable laws.'],
        },
        {
          title: 'Article 4. Ads and Rewards',
          paragraphs: ['The company may display ads in connection with service operation. Watching ads to receive in-game rewards is optional and not required.'],
        },
        {
          title: 'Article 5. Game Data and Intellectual Property',
          paragraphs: ['Service data is valid only within the applicable service and cannot be exchanged for cash. Copyrights and intellectual property rights for content in the service belong to the company.'],
        },
        {
          title: 'Article 6. Age and Restrictions',
          paragraphs: ['The available age for each service follows the applicable store listing and service notice. If a user violates these terms, the company may restrict use or terminate the user agreement.'],
        },
        {
          title: 'Article 7. Contact',
          className: 'contact-info',
          paragraphs: ['For questions about using the service, contact us at the email address below.', 'gosuni2025@gmail.com'],
        },
      ],
    },
    es: {
      label: 'Gosuni2025 Services',
      title: 'Términos de servicio',
      effective: 'Fecha de entrada en vigor: 4 de diciembre de 2025',
      intro: 'Esta página traducida resume los términos principales de las apps y juegos de Gosuni2025. Para los detalles legales, el texto original en coreano sigue siendo el aviso principal salvo que se publique una versión localizada por separado.',
      sections: [
        {
          title: 'Artículo 1. Objeto',
          paragraphs: ['Estos términos definen los derechos, obligaciones y responsabilidades entre la empresa y los usuarios respecto a las apps móviles, juegos y servicios relacionados ofrecidos por Gosuni2025.'],
        },
        {
          title: 'Artículo 2. Servicio',
          paragraphs: ['El servicio incluye uso de apps y juegos, registros, ajustes y recompensas específicos de cada servicio, y recompensas obtenidas al ver anuncios. Algunas funciones pueden requerir conexión de red.'],
        },
        {
          title: 'Artículo 3. Obligaciones del usuario',
          paragraphs: ['Los usuarios no deben interferir con la operación del servicio, explotar errores, hackear, modificar programas, infringir datos personales o propiedad intelectual, ni violar las leyes aplicables.'],
        },
        {
          title: 'Artículo 4. Anuncios y recompensas',
          paragraphs: ['La empresa puede mostrar anuncios relacionados con la operación del servicio. Ver anuncios para recibir recompensas dentro del juego es opcional y no obligatorio.'],
        },
        {
          title: 'Artículo 5. Datos del juego y propiedad intelectual',
          paragraphs: ['Los datos del servicio solo son válidos dentro del servicio correspondiente y no pueden cambiarse por dinero. Los derechos de autor y de propiedad intelectual del contenido del servicio pertenecen a la empresa.'],
        },
        {
          title: 'Artículo 6. Edad y restricciones',
          paragraphs: ['La edad disponible de cada servicio se rige por la ficha de la tienda y el aviso del servicio correspondiente. Si un usuario incumple estos términos, la empresa puede restringir el uso o terminar el acuerdo de uso.'],
        },
        {
          title: 'Artículo 7. Contacto',
          className: 'contact-info',
          paragraphs: ['Para preguntas sobre el uso del servicio, contáctanos en el correo indicado abajo.', 'gosuni2025@gmail.com'],
        },
      ],
    },
  },
};

let legalOriginalMarkup = null;

function isSupportedLanguage(language) {
  return LANGUAGES.some(({ code }) => code === language);
}

function getPageName() {
  return document.body.dataset.page || 'index';
}

function getSavedLanguage() {
  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isSupportedLanguage(savedLanguage) ? savedLanguage : 'ko';
  } catch {
    return 'ko';
  }
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Local storage may be unavailable in restricted browsing contexts.
  }
}

function getText(language, key) {
  return TEXT[language]?.[key] || TEXT.ko[key] || '';
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderParagraph(text) {
  if (text.includes('@')) {
    const email = escapeHtml(text);
    return `<p><a href="mailto:${email}">${email}</a></p>`;
  }

  return `<p>${escapeHtml(text)}</p>`;
}

function renderLegalSection(section) {
  const className = section.className ? ` class="${escapeHtml(section.className)}"` : '';
  const box = section.boxTitle
    ? `<div class="info-box"><p><strong>${escapeHtml(section.boxTitle)}</strong></p></div>`
    : '';
  const paragraphs = section.paragraphs?.map(renderParagraph).join('') || '';
  const items = section.items?.length
    ? `<ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
    : '';

  return `
    <section${className}>
      <h2>${escapeHtml(section.title)}</h2>
      ${box}
      ${paragraphs}
      ${items}
    </section>
  `;
}

function renderLegalSummary(pageName, language) {
  const content = LEGAL_SUMMARIES[pageName]?.[language];

  if (!content) {
    return null;
  }

  return `
    <div class="title-section">
      <p class="game-name">${escapeHtml(content.label)}</p>
      <h1>${escapeHtml(content.title)}</h1>
      <span class="effective-date">${escapeHtml(content.effective)}</span>
      <p class="intro-text">${escapeHtml(content.intro)}</p>
    </div>
    ${content.sections.map(renderLegalSection).join('')}
  `;
}

function applyLegalContent(pageName, language) {
  if (pageName !== 'privacy' && pageName !== 'terms') {
    return;
  }

  const root = document.querySelector('main.container');

  if (!root) {
    return;
  }

  if (!legalOriginalMarkup) {
    legalOriginalMarkup = root.innerHTML;
  }

  if (language === 'ko') {
    root.innerHTML = legalOriginalMarkup;
    return;
  }

  const translatedMarkup = renderLegalSummary(pageName, language);

  if (translatedMarkup) {
    root.innerHTML = translatedMarkup;
  }
}

function applyText(language) {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translated = getText(language, element.dataset.i18n);

    if (translated) {
      element.textContent = translated;
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const translated = getText(language, element.dataset.i18nAlt);

    if (translated) {
      element.setAttribute('alt', translated);
    }
  });
}

function applyMetadata(pageName, language) {
  const title = getText(language, `meta.${pageName}.title`);
  const description = getText(language, `meta.${pageName}.description`);
  const metaDescription = document.querySelector('meta[name="description"]');

  if (title) {
    document.title = title;
  }

  if (description && metaDescription) {
    metaDescription.setAttribute('content', description);
  }
}

function syncLanguageSwitcher(language) {
  const select = document.querySelector('.language-switcher__select');
  const label = document.querySelector('.language-switcher__label');

  if (select) {
    select.value = language;
    select.setAttribute('aria-label', getText(language, 'common.languageLabel'));
  }

  if (label) {
    label.textContent = getText(language, 'common.languageLabel');
  }
}

function setLanguage(language, shouldPersist = false) {
  if (!isSupportedLanguage(language)) {
    return;
  }

  const pageName = getPageName();
  const languageMeta = LANGUAGES.find(({ code }) => code === language);

  document.documentElement.lang = languageMeta.htmlLang;
  applyLegalContent(pageName, language);
  applyText(language);
  applyMetadata(pageName, language);
  syncLanguageSwitcher(language);

  if (shouldPersist) {
    saveLanguage(language);
  }
}

function injectLanguageSwitcherStyles() {
  if (document.getElementById('language-switcher-styles')) {
    return;
  }

  const style = document.createElement('style');
  style.id = 'language-switcher-styles';
  style.textContent = `
    .language-switcher {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      margin-left: auto;
      position: relative;
      z-index: 20;
      flex-shrink: 0;
    }

    .language-switcher__label {
      color: rgba(255, 255, 255, 0.86);
      font-size: 0.85rem;
      font-weight: 700;
      line-height: 1;
      white-space: nowrap;
    }

    .language-switcher__select {
      max-width: 9.75rem;
      min-height: 2.2rem;
      padding: 0.45rem 1.8rem 0.45rem 0.7rem;
      border: 1px solid rgba(255, 255, 255, 0.34);
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      font: inherit;
      font-size: 0.92rem;
      line-height: 1.2;
    }

    .language-switcher__select option {
      color: #1a1a2e;
      background: #fff;
    }

    body[data-page="index"] .language-switcher__label {
      color: #e0e0e0;
    }

    body[data-page="index"] .language-switcher__select {
      border-color: #444;
      background: #151515;
      color: #f4f4f4;
    }

    @media (max-width: 768px) {
      .language-switcher {
        align-self: flex-end;
        margin-left: 0;
      }

      nav .language-switcher {
        align-self: center;
      }

      .header-content .language-switcher {
        width: 100%;
        justify-content: flex-end;
      }

      .language-switcher__select {
        max-width: min(100%, 10rem);
      }
    }

    @media print {
      .language-switcher {
        display: none;
      }
    }
  `;

  document.head.appendChild(style);
}

function createLanguageSwitcher(currentLanguage) {
  if (document.querySelector('.language-switcher')) {
    return;
  }

  const host = document.querySelector('nav') || document.querySelector('.header-content') || document.querySelector('header');

  if (!host) {
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'language-switcher';

  const label = document.createElement('label');
  label.className = 'language-switcher__label';
  label.setAttribute('for', 'site-language');

  const select = document.createElement('select');
  select.id = 'site-language';
  select.className = 'language-switcher__select';

  LANGUAGES.forEach(({ code, label: optionLabel }) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = optionLabel;
    select.appendChild(option);
  });

  select.value = currentLanguage;
  select.addEventListener('change', () => {
    setLanguage(select.value, true);
  });

  wrapper.append(label, select);
  host.appendChild(wrapper);
}

function initHomeHeaderScroll() {
  const header = document.querySelector('body[data-page="index"] header');

  if (!header) {
    return;
  }

  header.style.background = 'rgba(10, 10, 10, 0.95)';
  header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
}

document.addEventListener('DOMContentLoaded', () => {
  const language = getSavedLanguage();

  injectLanguageSwitcherStyles();
  createLanguageSwitcher(language);
  setLanguage(language);
  initHomeHeaderScroll();

  console.log('Gosuni2025 multilingual pages loaded');
});
