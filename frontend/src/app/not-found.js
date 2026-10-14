// Сюда попадают только адреса вне /kk и /ru (например, /favicon.png)
export default function RootNotFound() {
  return (
    <html lang="kk">
      <body style={{ fontFamily: "sans-serif", padding: "2rem" }}>
        <h1>404</h1>
        <p>
          <a href="/kk">Басты бетке</a> · <a href="/ru">На главную</a>
        </p>
      </body>
    </html>
  );
}
