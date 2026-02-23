const translations = {
    en: {
        /* About Me Section */
        about_me_p1: "<strong>Agile software engineer</strong> <br />converting rapid learning into hands-on execution.",
        about_me_p2: "Orchestrating development across the <strong>full stack</strong> — from <br />intuitive UIs with <strong>React</strong>/<strong>TypeScript</strong> to robust backends using <strong>Python</strong>/<strong>Go</strong>, <br />and scalable verification environments via <strong>Container technology</strong>. <br />I bridge the gap between <strong>frontend</strong> and <strong>infrastructure</strong> <br />to optimize the entire system.",
        about_me_p3: "Prioritizing <strong>scalability</strong> and <strong>automation</strong> over just \"working code\".<br /> Armed with a deep curiosity for protocols and data structures,<br /> I dissect complex errors and navigate uncharted technical territories <br />to deliver <strong>logical</strong>, <strong>root-cause solutions</strong>.",

        /* What I can do Sction */
        service_list_1: "<strong>Full-Stack Development</strong><br /><br />Build scalable and maintainable web applications <br />using JavaScript, TypeScript, React, C#, and SQL.",
        service_list_2: "<strong>Cloud Fundamentals</strong><br /><br />Understand core cloud concepts and services across AWS and Azure, <br />with hands-on practice in setting up basic infrastructure and deployment pipelines.",
        service_list_3: "<strong>REST API Integration</strong><br /><br />Develop and integrate RESTful APIs for seamless communication <br />between frontend and backend systems.",
        service_list_4: "<strong>No-Code & Automation Tools</strong><br /><br />Use platforms like Okta Workflows and Microsoft 365 <br />to automate business processes and streamline workflows.",
        service_list_5: "<strong>Network Simulation & Protocol Testing</strong><br /><br />Design and run container-based network topologies <br />using Containerlab, KNE, and Docker. <br />Develop Go-based test harnesses to exercise protocol-level behavior (BGP, IS-IS)<br /> and investigate per-test dependencies and interactions. <br />Build reproducible labs and automate bring-up for CI-friendly networking workflows.",
        service_list_6: "<strong>Identity & Access Management (Okta)</strong><br /><br />Implement and manage enterprise account lifecycle and access controls <br />using Okta and Okta Workflows. <br />Work included SSO (SAML/OIDC), SCIM provisioning, MFA policies, <br />API-driven automation, and workflow-based process automation <br />to improve security and reduce manual provisioning overhead.",
        service_list_7: "<strong>Team Collaboration</strong><br /><br />Communicate effectively in cross-functional teams and contribute positively <br />to agile development processes.",


        /* Projects Section */
        project_1: "A car loan calculator built with ASP.NET Framework that lets users compare monthly payments across three flexible loan plans based on amount, interest, tax, and term.",
        project_2: "An AI-powered app built with PartyRock that analyzes meal nutrition and recommends additions for a more balanced, healthier diet.",
        project_3: "A simple console-based Othello game where two players can compete against each other. The game includes valid move checks, automatic piece flipping, and game-over detection.",
        project_4: "A console-based weather forecast application that retrieves real-time weather data for any city and displays detailed hourly forecasts with temperature conversions. The application fetches multi-day forecasts, presents hourly temperatures in both Fahrenheit and Celsius, includes weather descriptions, and features error handling for invalid city names with an intuitive formatted table display.",
        project_5: "A web application built with React and Python that uses Machine Learning (NLP) to analyze and score the alignment between resumes and job descriptions.",
        project_portfolio: "A responsive and animated web portfolio designed and built from scratch to showcase my software engineering background, skills, and projects.",

        /* Cloud & Infrastructure Projects Section */
        // Windows Server
        cloud_win_title: "Enterprise Windows Server Infrastructure Deployment",
        cloud_win_desc_1: "<strong>Scenario-Based Setup:</strong><br />Simulated infrastructure for a mid-sized company with high privacy and security demands.",
        cloud_win_desc_2: "<strong>Domain Services:</strong><br />Installed Active Directory Domain Services on Server Core and enforced 30-day password policies via Group Policy.",
        cloud_win_desc_3: "<strong>DHCP & DNS Configuration:</strong><br />Created DHCP scopes, a superscope, a multicast scope, and a DNS forwarder.",
        cloud_win_desc_4: "<strong>Storage & Virtualization:</strong><br />Built a storage pool, iSCSI target, and configured Hyper-V on multiple servers with a working replica.",
        cloud_win_desc_5: "<strong>Deployment Services:</strong><br />Installed and configured Windows Deployment Services(WDS), enforced settings through GPO, and restricted boot options.",

        // Microsoft 365
        cloud_m365_title: "Microsoft 365 Environment Implementation and Management",
        cloud_m365_desc_1: "<strong>Organization Profile Customization:</strong><br />Configured company branding, themes, and helpdesk info in Microsoft 365 admin center.",
        cloud_m365_desc_2: "<strong>PowerShell Automation:</strong><br />Installed M365 PowerShell module, created users, and assigned licenses via scripting.",
        cloud_m365_desc_3: "<strong>Office Apps & Email:</strong><br />Deployed Microsoft 365 Apps on VMs, tested email delivery using Exchange Online shared mailboxes and distribution lists.",
        cloud_m365_desc_4: "<strong>Exchange & Security:</strong><br />Managed shared mailboxes, distribution groups, and malware policies through Exchange Admin Center.",
        cloud_m365_desc_5: "<strong>Collaboration & Compliance:</strong><br />Set up SharePoint sites, document libraries, and sharing policies tailored for organizational needs.",
        cloud_m365_desc_6: "<strong>User & Group Management:</strong><br />Bulk imported users, configured profiles, and created Office 365 groups for departments with specific permissions.",
        cloud_m365_desc_7: "<strong>Security Implementation:</strong><br />Enabled Microsoft Defender features, data encryption, and configured anti-phishing and DLP policies.",
        cloud_m365_desc_8: "<strong>Monitoring & Reporting:</strong><br />Enabled audit logs, configured alert policies for suspicious activity, and scheduled usage reports for IT admins.",

        // Azure
        cloud_azure_title: "Azure Cloud Administration and Security Project",
        cloud_azure_desc_1: "<strong>Deployed & Managed:</strong><br />Configured virtual machines, virtual networks, and storage accounts in Microsoft Azure.",
        cloud_azure_desc_2: "<strong>Identity & Access:</strong><br />Managed users, groups, and role-based access control(RBAC) using Microsoft Entra ID.",
        cloud_azure_desc_3: "<strong>Security Configuration:</strong><br />Applied Conditional Access, network security groups(NSGs), firewalls, and Key Vault for secure operations.",
        cloud_azure_desc_4: "<strong>Monitoring & Compliance:</strong><br />Enabled Azure Monitor, activity logs, and Defender for Cloud to track usage and protect resources.",
        cloud_azure_desc_5: "<strong>Automation & Resilience:</strong><br />Utilized templates and backup solutions to support scalability and disaster recovery planning.",

        // AWS
        cloud_aws_title: "AWS Cloud Architecting, Security, and Project Development",
        cloud_aws_desc_1: "<strong>Core Cloud Fundamentals:</strong><br />Explored essential AWS services (EC2, S3, VPC, RDS, IAM) and applied concepts of the Well-Architected Framework for robust design.",
        cloud_aws_desc_2: "<strong>Architectural Design & Deployment:</strong><br />Designed and deployed scalable, highly available architectures by leveraging services like Auto Scaling, Load Balancers, and Route 53.",
        cloud_aws_desc_3: "<strong>Security & Access Control:</strong><br />Implemented best practices for cloud security, utilizing IAM (Identity and Access Management), Security Groups, and KMS to ensure confidentiality and integrity of resources.",
        cloud_aws_desc_4: "<strong>CI/CD & Microservices:</strong><br />Built a complete Microservices architecture and automated the deployment process using a CI/CD pipeline (e.g., CodeCommit, CodeBuild, CodeDeploy/CodePipeline) for rapid iteration.",
        cloud_aws_desc_5: "<strong>Data Pipeline Development:</strong><br />Hands-on experience in constructing a cloud data pipeline, integrating services for data ingestion, storage, processing, and analysis (e.g., S3, Lambda, DynamoDB/RDS, Glue).",
        cloud_aws_desc_6: "<strong>Web Application Builder:</strong><br />Developed and deployed cloud-native web applications, focusing on serverless and container technologies (e.g., Lambda, ECS/Fargate) for cost-efficient and scalable hosting.",

        // Okta
        cloud_okta_title: "Okta Enterprise Account Management",
        cloud_okta_desc_1: "<strong>Scope & Goals:</strong><br />Implemented enterprise account lifecycle management, SSO, and automated provisioning to centralize access control and reduce onboarding time.",
        cloud_okta_desc_2: "<strong>Tech & Tools:</strong><br />Okta (Universal Directory, SSO, MFA), Okta Workflows, SCIM connectors, REST APIs, and scripting for automation (PowerShell/Node.js).",
        cloud_okta_desc_3: "<strong>Outcome:</strong><br />Decreased manual provisioning effort, enforced consistent security policies, and introduced workflow-driven automation for common identity tasks.",

        // KNE
        cloud_kne_title: "Containerlab & KNE Routing Lab",
        cloud_kne_desc_1: "<strong>Topology Emulation:</strong><br />Created reproducible, container-based network topologies using Containerlab and KNE with Docker backends.",
        cloud_kne_desc_2: "<strong>Protocol Testing:</strong><br />Implemented Go-based test harnesses to drive and validate BGP and IS-IS scenarios, focusing on route propagation, convergence, and policy verification.",
        cloud_kne_desc_3: "<strong>Automation & CI:</strong><br />Automated lab bring-up and teardown with scripts and Docker Compose/KNE workflows to support repeatable test runs and CI integration.",
        cloud_kne_desc_4: "<strong>Dependency Analysis:</strong><br />Investigated interactions and dependencies across scope boundaries to isolate test cases and ensure deterministic behavior.",

        /* Upcoming Projects Section */
        upcoming_title: "AI-Powered Resume Scanner",
        upcoming_desc: "A web application built with React and Python that leverages Machine Learning (NLP) to analyze and score the alignment between resumes and job descriptions.",
    },
    jp: {
        /* About Me Section */
        about_me_p1: "変化の激しい開発環境において、迅速に技術をキャッチアップし、<br />実装へと落とし込む<strong>実走型エンジニア</strong>。",

        about_me_p2: "<strong>React</strong>/<strong>TypeScript</strong>によるUI構築から<strong>Python</strong>/<strong>Go</strong>を用いたバックエンド処理、<br /><strong>コンテナ技術</strong>を活用した検証環境の構築まで、領域を問わず開発をリード。<br /><strong>フロントエンド</strong>から<strong>インフラ</strong>までを横断し、システムの全体最適を追求する。",

        about_me_p3: "単に<strong>「動くコード」</strong>を書くだけでなく、運用を見据えた<strong>自動化</strong>や、<strong>スケーラビリティ</strong>を考慮した設計・実装に強いこだわりを持つ。表面的な実装にとどまらず、プロトコルやデータ構造の深層まで掘り下げる<strong>探究心</strong>を武器に、複雑なエラーや未知の技術領域に対しても論理的なアプローチで<strong>本質的な解決策</strong>を導き出す。",

        /* What I can do Sction */
        service_list_1: "<strong>Full-Stack Development</strong><br /><br />JavaScript, TypeScript (React), C#, SQLを用い、拡張性と保守性を考慮した<br />堅牢なWebアプリを設計・構築。",
        service_list_2: "<strong>Cloud Fundamentals</strong><br /><br />AWSおよびAzureにおけるクラウドの基本概念と主要サービスを習得。<br />インフラ構築からデプロイパイプラインの整備まで、<br />ハンズオンを通じた実践的な運用スキルを持つ。",
        service_list_3: "<strong>REST API Integration</strong><br /><br />フロントエンド・バックエンド間のシームレスなデータ連携を実現する、<br />RESTful APIの設計・開発および統合。",
        service_list_4: "<strong>No-Code & Automation Tools</strong><br /><br />Okta WorkflowsやMicrosoft 365を活用したビジネスプロセスの自動化。<br />業務フローの効率化とシステム間連携による工数削減を実現。",
        service_list_5: "<strong>Network Simulation & Protocol Testing</strong><br /><br />Containerlab, KNE, Dockerを用いたコンテナベースのネットワークトポロジ設計・構築。<br />Go言語によるテストハーネス開発を通じ、プロトコルレベル（BGP, IS-IS）の挙動検証およびテスト依存関係の調査を実施。CI/CDに適した再現性の高いラボ環境の自動構築を行う。",
        service_list_6: "<strong>Identity & Access Management (Okta)</strong><br /><br />OktaおよびOkta Workflowsを用いたアカウントライフサイクル管理とアクセス制御の実装。<br />SSO (SAML/OIDC)、SCIMプロビジョニング、MFAポリシー策定に加え、<br />APIベースの自動化によりセキュリティ向上と手動運用を削減。",
        service_list_7: "<strong>Team Collaboration</strong><br /><br />各領域やチームとの円滑なコミュニケーションと、<br />アジャイル開発プロセスへ積極的に貢献。",

        /* Projects Section */
        project_1: "ASP.NET Frameworkを用いて構築した自動車ローン計算アプリケーション。<br />借入金額、金利、税金、返済期間を基に、3つの柔軟なローンプランから月々の支払額を比較・シミュレーション可能。",
        project_2: "AWS PartyRockを活用したAI搭載の食事分析アプリケーション。<br />入力された食事の栄養素を分析し、より健康的でバランスの取れた食生活に向けた追加食材やメニューを提案。",
        project_3: "2人対戦用のコンソール版オセロゲーム。<br />有効な入力（配置可能箇所）の判定、石の自動反転処理、勝敗（ゲーム終了）の判定など、ゲームのコアロジックを網羅的に実装。",
        project_4: "任意の都市のリアルタイムな気象データを取得し、詳細な天気予報を表示するコンソールアプリケーション。数日間のデータ取得、摂氏・華氏の温度変換に加え、無効な都市名入力時のエラーハンドリングを実装。データは直感的なテーブル形式で出力。",
        project_5: "ReactとPython、および機械学習（自然言語処理）を活用したWebアプリケーション。求人内容（Job Description）と履歴書（レジュメ）の適合度を定量的に分析し、マッチングスコアを算出する機能を実装。",
        project_portfolio: "自身のソフトウェアエンジニアとしてのスキルや実績をアピールするため、ゼロから設計・開発したWebポートフォリオ。レスポンシブデザインとアニメーションを取り入れ、モダンなUIを実現。",

        /* Cloud & Infrastructure Projects Section */
        // Cloud Section General
        cloud_section_title: "クラウド ＆ インフラストラクチャ プロジェクト",
        cloud_show_more: "詳細を表示",

        // Windows Server
        cloud_win_title: "エンタープライズ Windows Server インフラ構築",
        cloud_win_desc_1: "<strong>シナリオベースの構築:</strong><br />高いプライバシーとセキュリティ要件を持つ中規模企業を想定したインフラ環境の構築。",
        cloud_win_desc_2: "<strong>ドメインサービス:</strong><br />Server Core環境へのActive Directoryドメインサービス（AD DS）構築、およびグループポリシー（GPO）を用いたパスワードポリシーの適用。",
        cloud_win_desc_3: "<strong>DHCP & DNS構成:</strong><br />DHCPスコープ、スーパースコープ、マルチキャストスコープ、およびDNSフォワーダーの構築。",
        cloud_win_desc_4: "<strong>ストレージ & 仮想化:</strong><br />ストレージプールの作成、iSCSIターゲットの構成、および複数サーバー間でのHyper-Vレプリカを利用した仮想化環境の構築。",
        cloud_win_desc_5: "<strong>展開サービス:</strong><br />Windows展開サービス（WDS）の導入と構成、GPOを通じた設定の適用、およびブートオプションの制限・管理。",

        // Microsoft 365
        cloud_m365_title: "Microsoft 365 環境の導入と管理",
        cloud_m365_desc_1: "<strong>組織プロファイルのカスタマイズ:</strong><br />M365管理センターにおける企業ブランディング、テーマ、ヘルプデスク情報の設定。",
        cloud_m365_desc_2: "<strong>PowerShell自動化:</strong><br />M365 PowerShellモジュールの導入、およびスクリプトを活用したユーザー作成とライセンス割り当ての自動化。",
        cloud_m365_desc_3: "<strong>Officeアプリ & メール:</strong><br />仮想マシンへのM365 Apps展開、Exchange Onlineの共有メールボックスおよび配布リストを用いたメール配信テストの実施。",
        cloud_m365_desc_4: "<strong>Exchange & セキュリティ:</strong><br />Exchange管理センターを通じた共有メールボックス、配布グループ、およびマルウェア対策ポリシーの管理。",
        cloud_m365_desc_5: "<strong>コラボレーション & コンプライアンス:</strong><br />組織のニーズに合わせたSharePointサイト、ドキュメントライブラリ、および共有ポリシーの設計・構築。",
        cloud_m365_desc_6: "<strong>ユーザー & グループ管理:</strong><br />ユーザーの一括インポート、プロファイル構成、および部門ごとの権限に応じたOffice 365グループの作成。",
        cloud_m365_desc_7: "<strong>セキュリティ実装:</strong><br />Microsoft Defender機能の有効化、データ暗号化、およびフィッシング対策・DLP（データ損失防止）ポリシーの構成。",
        cloud_m365_desc_8: "<strong>モニタリング & レポーティング:</strong><br />監査ログの有効化、不審なアクティビティに対するアラートポリシーの構成、およびIT管理者向け利用状況レポートの定期出力設定。",

        // Azure
        cloud_azure_title: "Azure クラウド管理・セキュリティプロジェクト",
        cloud_azure_desc_1: "<strong>展開 & 管理:</strong><br />Microsoft Azureにおける仮想マシン、仮想ネットワーク（VNet）、およびストレージアカウントの構築と構成。",
        cloud_azure_desc_2: "<strong>ID & アクセス管理:</strong><br />Microsoft Entra IDを利用したユーザー・グループ管理、およびロールベースアクセス制御（RBAC）の導入。",
        cloud_azure_desc_3: "<strong>セキュリティ構成:</strong><br />セキュアな運用に向けた条件付きアクセス、ネットワークセキュリティグループ（NSG）、ファイアウォール、およびKey Vaultの適用。",
        cloud_azure_desc_4: "<strong>モニタリング & コンプライアンス:</strong><br />Azure Monitor、アクティビティログ、およびDefender for Cloudの有効化によるリソース保護と利用状況の追跡。",
        cloud_azure_desc_5: "<strong>自動化 & 復元力:</strong><br />テンプレートやバックアップソリューションを活用した、スケーラビリティの確保とディザスタリカバリ（DR）計画の策定。",

        // AWS
        cloud_aws_title: "AWS クラウドアーキテクチャ・セキュリティ・プロジェクト開発",
        cloud_aws_desc_1: "<strong>クラウドの基礎:</strong><br />主要AWSサービス（EC2, S3, VPC, RDS, IAM）の活用、およびWell-Architectedフレームワークの概念を適用した堅牢なシステム設計。",
        cloud_aws_desc_2: "<strong>アーキテクチャ設計 & 展開:</strong><br />Auto Scaling、ロードバランサー、Route 53などのサービスを活用した、スケーラブルで高可用性を持つアーキテクチャの構築。",
        cloud_aws_desc_3: "<strong>セキュリティ & アクセス制御:</strong><br />IAM、セキュリティグループ、KMSを活用し、リソースの機密性と整合性を確保するクラウドセキュリティベストプラクティスの実装。",
        cloud_aws_desc_4: "<strong>CI/CD & マイクロサービス:</strong><br />マイクロサービスアーキテクチャの構築、およびCI/CDパイプラインを利用した迅速なデプロイサイクルの自動化。",
        cloud_aws_desc_5: "<strong>データパイプライン開発:</strong><br />データの取り込み、保存、処理、分析サービス（S3, Lambda, DynamoDB/RDS 等）を統合したクラウドデータパイプラインの構築。",
        cloud_aws_desc_6: "<strong>Webアプリケーション構築:</strong><br />サーバーレスおよびコンテナ技術（Lambda, ECS/Fargate 等）に特化した、コスト効率とスケーラビリティに優れたクラウドネイティブWebアプリケーションの開発。",

        // Okta
        cloud_okta_title: "Okta エンタープライズ アカウント管理",
        cloud_okta_desc_1: "<strong>目的と範囲:</strong><br />アクセス制御の統合およびオンボーディング時間の短縮を目的とした、アカウントのライフサイクル管理、SSO、プロビジョニング自動化の実装。",
        cloud_okta_desc_2: "<strong>技術 & ツール:</strong><br />Okta (Universal Directory, SSO, MFA)、Okta Workflows、SCIMコネクタ、REST API、および自動化スクリプト (PowerShell/Node.js) の活用。",
        cloud_okta_desc_3: "<strong>成果:</strong><br />手作業によるプロビジョニング工数の削減、一貫したセキュリティポリシーの適用、およびID管理タスクにおけるワークフロー駆動型の自動化の実現。",

        // KNE
        cloud_kne_title: "Containerlab & KNE ルーティングラボ",
        cloud_kne_desc_1: "<strong>トポロジ・エミュレーション:</strong><br />DockerバックエンドをベースとしたContainerlabおよびKNEを利用し、再現性の高いコンテナベースのネットワークトポロジを構築。",
        cloud_kne_desc_2: "<strong>プロトコルテスト:</strong><br />経路伝播、コンバージェンス、およびポリシー検証に焦点を当てた、BGPおよびIS-ISシナリオを検証するGo言語ベースのテストハーネスの実装。",
        cloud_kne_desc_3: "<strong>自動化 & CI:</strong><br />繰り返し可能なテスト実行とCI統合を支援するため、スクリプトおよびDocker Compose/KNEワークフローを利用したラボ環境の構築・解体の自動化。",
        cloud_kne_desc_4: "<strong>依存関係の分析:</strong><br />テストケースの分離と決定論的（再現可能）な挙動の保証を目的とした、スコープ境界を越えた相互作用と依存関係の調査。",

        /* Upcoming Projects Section */
        upcoming_title: "AI搭載 レジュメ解析スキャナー",
        upcoming_desc: "ReactとPython、および機械学習（自然言語処理）を活用したWebアプリケーション。求人内容（Job Description）と履歴書（レジュメ）の適合度を定量的に分析し、マッチングスコアを算出する機能を実装。",
    }
};

// 1. We create the logic ONCE here
function updateText() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // Use innerHTML for tags
        }
    });

    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.innerText = currentLang === 'en' ? 'JP' : 'EN';
    }
}

let currentLang = localStorage.getItem('preferredLang') || 'en';

function toggleLanguage() {
    // Switch the language variable
    currentLang = currentLang === 'en' ? 'jp' : 'en';

    // Update the text on the page
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // Update the button text to show the OTHER language option
    const btn = document.getElementById('lang-toggle');
    btn.innerText = currentLang === 'en' ? 'JP' : 'EN';

    // Save preference
    localStorage.setItem('preferredLang', currentLang);
    updateText();
}

// Run on page load to set the initial state
window.onload = () => {
    updateText();
};