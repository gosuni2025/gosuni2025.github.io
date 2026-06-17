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
    'common.support': '고객센터',
    'common.privacy': '개인정보 처리방침',
    'common.terms': '서비스 이용약관',
    'common.brand': '브랜드',
    'common.backHome': '← 홈으로',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Zombie Defense - 최후의 방어선',
    'meta.index.description': '좀비 아포칼립스에서 살아남으세요! 최고의 좀비 디펜스 게임. 지금 원스토어에서 다운로드하세요.',
    'meta.support.title': '고객센터 - 고순이2025',
    'meta.support.description': '고순이2025에서 제공하는 앱과 게임을 위한 공용 고객센터입니다.',
    'meta.privacy.title': '개인정보 처리방침 - Zombie Defense',
    'meta.privacy.description': 'Zombie Defense 게임의 개인정보 처리방침입니다.',
    'meta.terms.title': '서비스 이용약관 - Zombie Defense',
    'meta.terms.description': 'Zombie Defense 게임의 서비스 이용약관입니다.',
    'index.nav.features': '특징',
    'index.nav.about': '게임 소개',
    'index.nav.download': '다운로드',
    'index.hero.title': '최후의 방어선을 사수하라',
    'index.hero.subtitle': '끊임없이 몰려오는 좀비 떼로부터 기지를 방어하세요. 당신의 전략이 인류의 마지막 희망입니다.',
    'index.downloadStore': '원스토어에서 다운로드',
    'index.appStoreAlt': 'App Store에서 다운로드',
    'index.badgeAlt': '원스토어에서 다운로드',
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
  },
  ja: {
    'common.languageLabel': '言語',
    'common.home': 'ホーム',
    'common.support': 'サポート',
    'common.privacy': 'プライバシーポリシー',
    'common.terms': '利用規約',
    'common.brand': 'ブランド',
    'common.backHome': '← ホームへ',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Zombie Defense - 最後の防衛線',
    'meta.index.description': 'ゾンビアポカリプスを生き延びよう。戦略ディフェンスゲーム Zombie Defense を今すぐONE Storeでダウンロード。',
    'meta.support.title': 'サポート - Gosuni2025',
    'meta.support.description': 'Gosuni2025が提供するアプリとゲームの共通サポート窓口です。',
    'meta.privacy.title': 'プライバシーポリシー - Zombie Defense',
    'meta.privacy.description': 'Zombie Defenseのプライバシーポリシーです。',
    'meta.terms.title': '利用規約 - Zombie Defense',
    'meta.terms.description': 'Zombie Defenseのサービス利用規約です。',
    'index.nav.features': '特徴',
    'index.nav.about': 'ゲーム紹介',
    'index.nav.download': 'ダウンロード',
    'index.hero.title': '最後の防衛線を守り抜け',
    'index.hero.subtitle': '押し寄せるゾンビの群れから基地を守りましょう。あなたの戦略が人類最後の希望です。',
    'index.downloadStore': 'ONE Storeでダウンロード',
    'index.appStoreAlt': 'App Storeでダウンロード',
    'index.badgeAlt': 'ONE Storeでダウンロード',
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
  },
  'zh-CN': {
    'common.languageLabel': '语言',
    'common.home': '首页',
    'common.support': '客户支持',
    'common.privacy': '隐私政策',
    'common.terms': '服务条款',
    'common.brand': '品牌',
    'common.backHome': '← 返回首页',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Zombie Defense - 最后的防线',
    'meta.index.description': '在僵尸末日中生存下来！立即在ONE Store下载策略防守游戏 Zombie Defense。',
    'meta.support.title': '客户支持 - Gosuni2025',
    'meta.support.description': 'Gosuni2025 应用和游戏的通用客户支持页面。',
    'meta.privacy.title': '隐私政策 - Zombie Defense',
    'meta.privacy.description': 'Zombie Defense 游戏的隐私政策。',
    'meta.terms.title': '服务条款 - Zombie Defense',
    'meta.terms.description': 'Zombie Defense 游戏的服务条款。',
    'index.nav.features': '特色',
    'index.nav.about': '游戏介绍',
    'index.nav.download': '下载',
    'index.hero.title': '守住最后的防线',
    'index.hero.subtitle': '保护基地免受不断涌来的僵尸群袭击。你的策略就是人类最后的希望。',
    'index.downloadStore': '在ONE Store下载',
    'index.appStoreAlt': '在App Store下载',
    'index.badgeAlt': '在ONE Store下载',
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
    'common.support': '客戶支援',
    'common.privacy': '隱私權政策',
    'common.terms': '服務條款',
    'common.brand': '品牌',
    'common.backHome': '← 返回首頁',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Zombie Defense - 最後防線',
    'meta.index.description': '在殭屍末日中存活下來！立即到ONE Store下載策略防守遊戲 Zombie Defense。',
    'meta.support.title': '客戶支援 - Gosuni2025',
    'meta.support.description': 'Gosuni2025 應用程式與遊戲的共用客戶支援頁面。',
    'meta.privacy.title': '隱私權政策 - Zombie Defense',
    'meta.privacy.description': 'Zombie Defense 遊戲的隱私權政策。',
    'meta.terms.title': '服務條款 - Zombie Defense',
    'meta.terms.description': 'Zombie Defense 遊戲的服務條款。',
    'index.nav.features': '特色',
    'index.nav.about': '遊戲介紹',
    'index.nav.download': '下載',
    'index.hero.title': '守住最後防線',
    'index.hero.subtitle': '保護基地，抵禦不斷湧來的殭屍群。你的策略就是人類最後的希望。',
    'index.downloadStore': '在ONE Store下載',
    'index.appStoreAlt': '在App Store下載',
    'index.badgeAlt': '在ONE Store下載',
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
    'common.support': 'Support',
    'common.privacy': 'Privacy Policy',
    'common.terms': 'Terms of Service',
    'common.brand': 'Brand',
    'common.backHome': '← Home',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Zombie Defense - The Last Line of Defense',
    'meta.index.description': 'Survive the zombie apocalypse. Download the strategy defense game Zombie Defense on ONE Store today.',
    'meta.support.title': 'Support - Gosuni2025',
    'meta.support.description': 'Shared support center for apps and games provided by Gosuni2025.',
    'meta.privacy.title': 'Privacy Policy - Zombie Defense',
    'meta.privacy.description': 'Privacy policy for the Zombie Defense game.',
    'meta.terms.title': 'Terms of Service - Zombie Defense',
    'meta.terms.description': 'Terms of service for the Zombie Defense game.',
    'index.nav.features': 'Features',
    'index.nav.about': 'About',
    'index.nav.download': 'Download',
    'index.hero.title': 'Hold the Last Line',
    'index.hero.subtitle': 'Defend your base from endless waves of zombies. Your strategy is humanity’s final hope.',
    'index.downloadStore': 'Download on ONE Store',
    'index.appStoreAlt': 'Download on the App Store',
    'index.badgeAlt': 'Download on ONE Store',
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
    'common.support': 'Soporte',
    'common.privacy': 'Política de privacidad',
    'common.terms': 'Términos de servicio',
    'common.brand': 'Marca',
    'common.backHome': '← Inicio',
    'common.zombieRights': '© 2025 Zombie Defense Team. All rights reserved.',
    'common.gosuniRights': '© 2025 Gosuni2025. All rights reserved.',
    'meta.index.title': 'Zombie Defense - La última línea de defensa',
    'meta.index.description': 'Sobrevive al apocalipsis zombi. Descarga hoy Zombie Defense, un juego de defensa estratégica, en ONE Store.',
    'meta.support.title': 'Soporte - Gosuni2025',
    'meta.support.description': 'Centro de soporte común para las apps y juegos ofrecidos por Gosuni2025.',
    'meta.privacy.title': 'Política de privacidad - Zombie Defense',
    'meta.privacy.description': 'Política de privacidad del juego Zombie Defense.',
    'meta.terms.title': 'Términos de servicio - Zombie Defense',
    'meta.terms.description': 'Términos de servicio del juego Zombie Defense.',
    'index.nav.features': 'Características',
    'index.nav.about': 'Acerca del juego',
    'index.nav.download': 'Descargar',
    'index.hero.title': 'Defiende la última línea',
    'index.hero.subtitle': 'Protege tu base de oleadas interminables de zombis. Tu estrategia es la última esperanza de la humanidad.',
    'index.downloadStore': 'Descargar en ONE Store',
    'index.appStoreAlt': 'Descargar en App Store',
    'index.badgeAlt': 'Descargar en ONE Store',
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

const LEGAL_SUMMARIES = {
  privacy: {
    ja: {
      label: 'Zombie Defense',
      title: 'プライバシーポリシー',
      effective: '施行日: 2025年12月1日',
      intro: 'このページは、Zombie Defenseの個人情報の取り扱いに関する主要事項を案内する翻訳版です。法的な詳細は韓国語の原文を基準とします。',
      sections: [
        {
          title: '1. 取り扱う情報',
          boxTitle: 'ローカル保存方式',
          paragraphs: [
            '本ゲームは独自サーバーを運営しておらず、ゲームデータは利用者の端末に保存されます。',
            'ただし、広告および分析サービスを通じて、端末情報、広告ID、IPアドレス、広告視聴記録、アプリ利用統計などが各提供元により処理される場合があります。',
          ],
        },
        {
          title: '2. 第三者サービス',
          paragraphs: ['無料ゲーム提供、広告配信、サービス改善、統計分析のため、以下のサービスが使用されます。'],
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
      label: 'Zombie Defense',
      title: '隐私政策',
      effective: '生效日期：2025年12月1日',
      intro: '本页是 Zombie Defense 隐私处理主要事项的翻译说明。法律细节以韩文原文为准。',
      sections: [
        {
          title: '1. 处理的信息',
          boxTitle: '本地保存方式',
          paragraphs: [
            '本游戏不运营自有服务器，游戏数据保存在用户设备本地。',
            '但广告和分析服务提供商可能会处理设备信息、广告ID、IP地址、广告观看记录、应用使用统计等信息。',
          ],
        },
        {
          title: '2. 第三方服务',
          paragraphs: ['为了提供免费游戏、投放广告、改进服务和进行统计分析，会使用以下服务。'],
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
      label: 'Zombie Defense',
      title: '隱私權政策',
      effective: '生效日：2025年12月1日',
      intro: '本頁為 Zombie Defense 隱私處理主要事項的翻譯說明。法律細節以韓文原文為準。',
      sections: [
        {
          title: '1. 處理的資訊',
          boxTitle: '本機儲存方式',
          paragraphs: [
            '本遊戲不營運自有伺服器，遊戲資料會儲存在使用者裝置本機。',
            '但廣告與分析服務供應商可能會處理裝置資訊、廣告ID、IP位址、廣告觀看紀錄、應用程式使用統計等資訊。',
          ],
        },
        {
          title: '2. 第三方服務',
          paragraphs: ['為了提供免費遊戲、投放廣告、改善服務與統計分析，會使用以下服務。'],
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
      label: 'Zombie Defense',
      title: 'Privacy Policy',
      effective: 'Effective date: December 1, 2025',
      intro: 'This translated page summarizes the key privacy practices for Zombie Defense. For legal details, the Korean original remains the primary notice unless a separate localized policy is provided.',
      sections: [
        {
          title: '1. Information Handled',
          boxTitle: 'Local storage model',
          paragraphs: [
            'The game does not operate its own server, and game data is stored locally on the user’s device.',
            'Third-party advertising and analytics providers may process device information, advertising IDs, IP addresses, ad-view records, and app usage statistics.',
          ],
        },
        {
          title: '2. Third-Party Services',
          paragraphs: ['The following services are used to provide the free game, deliver ads, improve the service, and analyze usage.'],
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
      label: 'Zombie Defense',
      title: 'Política de privacidad',
      effective: 'Fecha de entrada en vigor: 1 de diciembre de 2025',
      intro: 'Esta página traducida resume las prácticas principales de privacidad de Zombie Defense. Para los detalles legales, el texto original en coreano sigue siendo el aviso principal salvo que se publique una política localizada por separado.',
      sections: [
        {
          title: '1. Información tratada',
          boxTitle: 'Modelo de almacenamiento local',
          paragraphs: [
            'El juego no opera un servidor propio y los datos del juego se guardan localmente en el dispositivo del usuario.',
            'Los proveedores externos de anuncios y analítica pueden tratar información del dispositivo, ID de publicidad, direcciones IP, registros de anuncios vistos y estadísticas de uso de la app.',
          ],
        },
        {
          title: '2. Servicios de terceros',
          paragraphs: ['Se utilizan los siguientes servicios para ofrecer el juego gratuito, mostrar anuncios, mejorar el servicio y analizar estadísticas.'],
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
      label: 'Zombie Defense',
      title: '利用規約',
      effective: '施行日: 2025年12月4日',
      intro: 'このページは、Zombie Defense利用規約の主要事項を案内する翻訳版です。法的な詳細は韓国語の原文を基準とします。',
      sections: [
        {
          title: '第1条 目的',
          paragraphs: ['本規約は、Gosuniが提供するモバイルゲーム「Zombie Defense」の利用に関する会社と利用者の権利、義務および責任事項を定めます。'],
        },
        {
          title: '第2条 サービス',
          paragraphs: ['本サービスには、ゲームプレイ、ゲーム内報酬、広告視聴による報酬などが含まれます。一部機能はネットワーク接続を必要とする場合があります。'],
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
          paragraphs: ['ゲームデータはサービス内でのみ有効で、現金に交換されません。サービス内のコンテンツに関する著作権および知的財産権は会社に帰属します。'],
        },
        {
          title: '第6条 利用年齢と制限',
          paragraphs: ['本サービスは12歳以上が利用できます。規約違反がある場合、会社は利用制限または契約解除を行うことがあります。'],
        },
        {
          title: '第7条 お問い合わせ',
          className: 'contact-info',
          paragraphs: ['サービス利用に関するお問い合わせは、下記メールアドレスまでご連絡ください。', 'gosuni2025@gmail.com'],
        },
      ],
    },
    'zh-CN': {
      label: 'Zombie Defense',
      title: '服务条款',
      effective: '生效日期：2025年12月4日',
      intro: '本页是 Zombie Defense 服务条款主要事项的翻译说明。法律细节以韩文原文为准。',
      sections: [
        {
          title: '第1条 目的',
          paragraphs: ['本条款规定 Gosuni 提供的移动游戏“Zombie Defense”服务使用相关的公司与用户之间的权利、义务和责任事项。'],
        },
        {
          title: '第2条 服务',
          paragraphs: ['服务包括游戏玩法、游戏内奖励、通过观看广告获得奖励等。部分功能可能需要网络连接。'],
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
          paragraphs: ['游戏数据仅在服务内有效，不能兑换现金。服务中包含的内容的著作权和知识产权归公司所有。'],
        },
        {
          title: '第6条 使用年龄与限制',
          paragraphs: ['本服务适合12岁及以上用户使用。如用户违反条款，公司可限制使用或解除使用协议。'],
        },
        {
          title: '第7条 联系方式',
          className: 'contact-info',
          paragraphs: ['如有服务使用相关问题，请通过以下邮箱联系。', 'gosuni2025@gmail.com'],
        },
      ],
    },
    'zh-TW': {
      label: 'Zombie Defense',
      title: '服務條款',
      effective: '生效日：2025年12月4日',
      intro: '本頁為 Zombie Defense 服務條款主要事項的翻譯說明。法律細節以韓文原文為準。',
      sections: [
        {
          title: '第1條 目的',
          paragraphs: ['本條款規定 Gosuni 提供的行動遊戲「Zombie Defense」服務使用相關之公司與使用者間權利、義務與責任事項。'],
        },
        {
          title: '第2條 服務',
          paragraphs: ['服務包含遊戲遊玩、遊戲內獎勵、透過觀看廣告取得獎勵等。部分功能可能需要網路連線。'],
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
          paragraphs: ['遊戲資料僅於服務內有效，不能兌換現金。服務內內容的著作權與智慧財產權歸公司所有。'],
        },
        {
          title: '第6條 使用年齡與限制',
          paragraphs: ['本服務適合12歲以上使用者。若使用者違反條款，公司可限制使用或終止使用契約。'],
        },
        {
          title: '第7條 聯絡方式',
          className: 'contact-info',
          paragraphs: ['如有服務使用相關問題，請透過以下電子郵件聯絡。', 'gosuni2025@gmail.com'],
        },
      ],
    },
    en: {
      label: 'Zombie Defense',
      title: 'Terms of Service',
      effective: 'Effective date: December 4, 2025',
      intro: 'This translated page summarizes the key terms for Zombie Defense. For legal details, the Korean original remains the primary notice unless a separate localized version is provided.',
      sections: [
        {
          title: 'Article 1. Purpose',
          paragraphs: ['These terms define the rights, obligations, and responsibilities between the company and users regarding the mobile game “Zombie Defense” provided by Gosuni.'],
        },
        {
          title: 'Article 2. Service',
          paragraphs: ['The service includes game play, in-game rewards, and rewards earned by watching ads. Some features may require a network connection.'],
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
          paragraphs: ['Game data is valid only within the service and cannot be exchanged for cash. Copyrights and intellectual property rights for content in the service belong to the company.'],
        },
        {
          title: 'Article 6. Age and Restrictions',
          paragraphs: ['The service is available to users aged 12 and older. If a user violates these terms, the company may restrict use or terminate the user agreement.'],
        },
        {
          title: 'Article 7. Contact',
          className: 'contact-info',
          paragraphs: ['For questions about using the service, contact us at the email address below.', 'gosuni2025@gmail.com'],
        },
      ],
    },
    es: {
      label: 'Zombie Defense',
      title: 'Términos de servicio',
      effective: 'Fecha de entrada en vigor: 4 de diciembre de 2025',
      intro: 'Esta página traducida resume los términos principales de Zombie Defense. Para los detalles legales, el texto original en coreano sigue siendo el aviso principal salvo que se publique una versión localizada por separado.',
      sections: [
        {
          title: 'Artículo 1. Objeto',
          paragraphs: ['Estos términos definen los derechos, obligaciones y responsabilidades entre la empresa y los usuarios respecto al juego móvil “Zombie Defense” ofrecido por Gosuni.'],
        },
        {
          title: 'Artículo 2. Servicio',
          paragraphs: ['El servicio incluye juego, recompensas dentro del juego y recompensas obtenidas al ver anuncios. Algunas funciones pueden requerir conexión de red.'],
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
          paragraphs: ['Los datos del juego solo son válidos dentro del servicio y no pueden cambiarse por dinero. Los derechos de autor y de propiedad intelectual del contenido del servicio pertenecen a la empresa.'],
        },
        {
          title: 'Artículo 6. Edad y restricciones',
          paragraphs: ['El servicio está disponible para usuarios de 12 años o más. Si un usuario incumple estos términos, la empresa puede restringir el uso o terminar el acuerdo de uso.'],
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

  const updateHeader = () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(10, 10, 10, 0.95)';
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
      header.style.background = 'rgba(10, 10, 10, 0.9)';
      header.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', updateHeader);
  updateHeader();
}

document.addEventListener('DOMContentLoaded', () => {
  const language = getSavedLanguage();

  injectLanguageSwitcherStyles();
  createLanguageSwitcher(language);
  setLanguage(language);
  initHomeHeaderScroll();

  console.log('Gosuni2025 multilingual pages loaded');
});
