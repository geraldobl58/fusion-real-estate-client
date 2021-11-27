import * as S from './styles'

const Logo = () => (
  <S.Wrapper>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 232 44">
      <path
        fill="#7839F3"
        d="M21.895 43.79c12.092 0 21.895-9.803 21.895-21.895C43.79 9.803 33.987 0 21.895 0 9.803 0 0 9.803 0 21.895 0 33.987 9.803 43.79 21.895 43.79Z"
      />
      <path
        fill="#fff"
        d="M14.406 34.07h-2.307l.484-2.42a4.9 4.9 0 0 1 4.8-3.927h2.322l-.488 2.42a4.888 4.888 0 0 1-4.811 3.928ZM22.06 25.601h-8.804l.484-2.4a4.896 4.896 0 0 1 4.812-3.927h8.788l-.485 2.42A4.887 4.887 0 0 1 22.06 25.6ZM28.159 17.08H14.446l.484-2.42a4.9 4.9 0 0 1 4.8-3.928h13.712l-.484 2.42a4.892 4.892 0 0 1-4.8 3.928Z"
      />
      <path
        fill="#000"
        d="M67.507 33.622c0 .288-.855.432-2.565.432-1.728 0-2.592-.135-2.592-.405V16.045c0-.63.333-.945.999-.945h5.157c4.734 0 7.101 1.845 7.101 5.535 0 1.116-.216 2.133-.648 3.051a5.374 5.374 0 0 1-1.836 2.16l3.402 5.67c-.144.432-.612.927-1.404 1.485-1.08.774-1.971 1.161-2.673 1.161s-1.224-.252-1.566-.756l-2.538-5.913h-.837v6.129Zm0-13.743v4.05h.135c1.71 0 2.565-.711 2.565-2.133 0-.648-.171-1.125-.513-1.431-.324-.324-.864-.486-1.62-.486h-.567Zm19.544 2.727c.342 0 .513.63.513 1.89 0 .378-.045.828-.135 1.35-.072.504-.216.756-.432.756h-3.43v2.7h4.969c.306 0 .513.396.62 1.188.055.342.082.711.082 1.107 0 .378-.054.873-.162 1.485-.108.612-.288.918-.54.918h-9.234c-.684 0-1.026-.279-1.026-.837V15.802c0-.468.207-.702.62-.702h9.667c.378 0 .567.801.567 2.403 0 1.584-.19 2.376-.567 2.376h-4.995v2.727h3.483Zm17.23 11.448c-1.566 0-2.412-.252-2.538-.756l-.891-3.483h-4.293l-.783 3.348c-.108.558-.972.837-2.592.837-.864 0-1.503-.045-1.917-.135-.414-.108-.62-.189-.62-.243l4.778-18.279c0-.144 1.233-.216 3.7-.216 2.465 0 3.698.072 3.698.216l4.671 18.306c0 .126-.414.225-1.242.297-.828.072-1.485.108-1.971.108Zm-7.047-7.668h2.835l-1.215-5.589h-.162l-1.458 5.589Zm11.78 6.021V15.613c0-.378.909-.567 2.727-.567 1.836 0 2.754.189 2.754.567v13.23h4.158c.324 0 .549.423.675 1.269.054.414.081.837.081 1.269 0 .432-.027.873-.081 1.323-.144.864-.378 1.296-.702 1.296h-8.316c-.396 0-.711-.162-.945-.486a1.843 1.843 0 0 1-.351-1.107Zm25.867-9.801c.342 0 .513.63.513 1.89 0 .378-.045.828-.135 1.35-.072.504-.216.756-.432.756h-3.429v2.7h4.968c.306 0 .513.396.621 1.188.054.342.081.711.081 1.107 0 .378-.054.873-.162 1.485-.108.612-.288.918-.54.918h-9.234c-.684 0-1.026-.279-1.026-.837V15.802c0-.468.207-.702.621-.702h9.666c.378 0 .567.801.567 2.403 0 1.584-.189 2.376-.567 2.376h-4.995v2.727h3.483Zm5.242 4.806c.342.27.927.639 1.755 1.107.846.468 1.647.702 2.403.702.774 0 1.161-.297 1.161-.891a.922.922 0 0 0-.324-.702c-.216-.216-.612-.459-1.188-.729a61.906 61.906 0 0 1-1.296-.621 14.653 14.653 0 0 1-1.161-.756c-.468-.36-.828-.729-1.08-1.107-.72-1.026-1.08-2.331-1.08-3.915s.585-2.916 1.755-3.996c1.188-1.098 2.736-1.647 4.644-1.647 1.296 0 2.493.144 3.591.432 1.098.27 1.665.63 1.701 1.08v.162c0 .63-.198 1.431-.594 2.403-.396.954-.675 1.485-.837 1.593-1.152-.594-2.187-.891-3.105-.891-.9 0-1.35.324-1.35.972 0 .396.333.747.999 1.053.144.072.351.171.621.297.27.126.576.279.918.459.36.162.738.378 1.134.648a8.54 8.54 0 0 1 1.323 1.026c.954.9 1.431 2.088 1.431 3.564 0 1.926-.531 3.501-1.593 4.725-1.062 1.224-2.7 1.854-4.914 1.89-1.08 0-2.061-.09-2.943-.27a5.27 5.27 0 0 1-2.268-1.053c-.648-.522-.972-1.152-.972-1.89s.135-1.467.405-2.187c.27-.738.558-1.224.864-1.458Zm21.769 6.156c0 .36-.891.54-2.673.54s-2.673-.18-2.673-.54V20.014h-3.24c-.306 0-.522-.414-.648-1.242a8.984 8.984 0 0 1-.081-1.215c0-.414.027-.819.081-1.215.126-.828.342-1.242.648-1.242h11.745c.306 0 .522.414.648 1.242.054.396.081.801.081 1.215 0 .414-.027.819-.081 1.215-.126.828-.342 1.242-.648 1.242h-3.159v13.554Zm17.43.486c-1.566 0-2.412-.252-2.538-.756l-.891-3.483H171.6l-.783 3.348c-.108.558-.972.837-2.592.837-.864 0-1.503-.045-1.917-.135-.414-.108-.621-.189-.621-.243l4.779-18.279c0-.144 1.233-.216 3.699-.216 2.466 0 3.699.072 3.699.216l4.671 18.306c0 .126-.414.225-1.242.297-.828.072-1.485.108-1.971.108Zm-7.047-7.668h2.835l-1.215-5.589h-.162l-1.458 5.589Zm19.491 7.182c0 .36-.891.54-2.673.54s-2.673-.18-2.673-.54V20.014h-3.24c-.306 0-.522-.414-.648-1.242a8.984 8.984 0 0 1-.081-1.215c0-.414.027-.819.081-1.215.126-.828.342-1.242.648-1.242h11.745c.306 0 .522.414.648 1.242.054.396.081.801.081 1.215 0 .414-.027.819-.081 1.215-.126.828-.342 1.242-.648 1.242h-3.159v13.554Zm14.201-10.962c.342 0 .513.63.513 1.89 0 .378-.045.828-.135 1.35-.072.504-.216.756-.432.756h-3.429v2.7h4.968c.306 0 .513.396.621 1.188.054.342.081.711.081 1.107 0 .378-.054.873-.162 1.485-.108.612-.288.918-.54.918h-9.234c-.684 0-1.026-.279-1.026-.837V15.802c0-.468.207-.702.621-.702h9.666c.378 0 .567.801.567 2.403 0 1.584-.189 2.376-.567 2.376h-4.995v2.727h3.483Z"
      />
    </svg>
  </S.Wrapper>
)

export default Logo
