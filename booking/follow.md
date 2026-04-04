## プロジェクトの予約フロー概要

### 1. 管理者フロー - 予約システムの設定 (A2)  (A1-003)

- Link Figma (https://www.figma.com/design/hK2f5YpFcnfzNS6KJTMP40/AIOrder?node-id=7091-11233&t=1LDaVe1sjnuwsuSV-0)
- 受付チャンネルの設定：LINE または Web からの予約をON/OFFにする
- 確認モード：自動 または 手動確認
- 支払い方法：オンライン（キャンセル不可）または 店舗にて
- キャンセルポリシー：キャンセル可能な最低時間数を設定（デフォルト24時間）
- スケジュール：表示する時間帯、デフォルト利用時間、シフト間の片付け時間
- 通知：自動リマインドのON/OFF、メッセージ内容のカスタマイズ

### 2. 顧客フロー - LINE Mini App からの予約 (C1)

- Link Figma (https://www.figma.com/design/hK2f5YpFcnfzNS6KJTMP40/AIOrder?node-id=4529-21317&t=1LDaVe1sjnuwsuSV-0)
- ステップ1：ホーム画面 → 「予約する」を選択 (C1-001)
- ステップ2：予約フォームの入力 (C1-002)
    - 氏名、電話番号を入力
    - 日付、時間、人数を選択
    - 席タイプを選択（カウンター / テーブル / 座敷）
- ステップ3：プラン / メニューを選択（任意）→ 価格 × 人数を表示 (C1-003)
- ステップ4：支払い (C1-004)
    - オンライン（PayPay QR、Square（クレジットカード））
    - 店舗にて
- ステップ5：完了 (C1-005)
    - 予約完了通知を受け取る
    - チェックイン用QRコードを受け取る
- 予約管理：一覧表示、詳細表示、予約の承認、テーブル割り当て、キャンセル（ポリシーに従う）

### 3. スタッフフロー - Restaurant Board での管理 (S2)

- Link figmar: https://www.figma.com/design/hK2f5YpFcnfzNS6KJTMP40/AIOrder?node-id=4529-43280&t=1LDaVe1sjnuwsuSV-0
- 一覧の表示・絞り込み：(2.1.1 (S2-01; S2-09))
    - 日付、ステータスで絞り込み
    - 電話番号 / 氏名で検索
- 新規予約の作成：(S2.3)
    - 電話番号で顧客を検索（常連の場合は自動入力）
    - 情報を入力：氏名、電話番号、人数、子供の有無
    - 選択：日付、時間、利用時間、席タイプ、テーブル指定
    - プラン / メニューを選択、メモを入力
- 予約の詳細表示と更新 (S2.4)
- 予約処理 - ステータスフロー：
    
    pending → confirmed → check_in → seated → completed
    
                                   ↓
    
                              cancelled
    
    - 確認：pending → confirmed（LINE通知を送信）
    - チェックイン：confirmed → check_in（QRスキャン または 手動）
    - テーブル割り当て：check_in → seated
    - 完了：seated → completed
    - キャンセル：いずれのステータス → cancelled
- 連絡：LINEでリマインド / 通知を送信
