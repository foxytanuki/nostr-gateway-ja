import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className="nes-container">
      <p>
        Nostr Gateway は、Nostrのデータを世界中のリレーからHTMLページに取り込み、不特定多数の人が利用できるようにするための取り組みです。
      </p>

      <form
        onSubmit={e => {
          e.preventDefault()
          router.push(`/${e.target.input.value}`)
        }}
      >
        <div className="nes-field">
          <label htmlFor="input">
            Nostrのイベントキーか、
            <a href="https://github.com/nostr-protocol/nips/blob/master/19.md">
              NIP-19
            </a>{' '}
            形式のパブリックキーを入力してください:
          </label>
          <input name="input" id="input" className="nes-input" />
        </div>
        <div
          className="nes-field"
          style={{display: 'flex', justifyContent: 'flex-end'}}
        >
          <button
            type="submit"
            className="nes-btn is-primary"
            style={{
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              fontSize: '110%'
            }}
          >
            Go
          </button>
        </div>
      </form>

      <h2>Nostrとは?</h2>
      <p>
        とてもシンプルでスケーラブルな、暗号鍵ペアに基づく分散型ネットワークです。P2Pではありません。
      </p>
      <p>
        詳しくはこちら:{' '}
        <a href="https://github.com/nostr-protocol/nostr">
          https://github.com/nostr-protocol/nostr
        </a>
      </p>
      <p>
        Nostrに関するプロジェクトをまとめたサイトはこちら:{' '}
        <a href="https://nostr.net">nostr.net</a>
      </p>
      <br />

      <h2>Contribute to this site!</h2>
      <p>
        当サイトは以下のRepositoryを元に作成されました。
        <br />
        <a href="https://github.com/fiatjaf/nostr-gateway">
          https://github.com/fiatjaf/nostr-gateway
        </a>{' '}
      </p>
      <p>
        当サイトに変更を加えたい方はこちら↓
        <br />
        <a href="https://github.com/nostrich-day/nostr-gateway-ja">
          https://github.com/nostrich-day/nostr-gateway-ja
        </a>{' '}
      </p>
    </div>
  )
}
