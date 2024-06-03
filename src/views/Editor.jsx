export default function Editor() {
  return (
    <iframe
      src="http://jupyterlab.pbvr.org.cn/?token=a_token"
      className="iframe-content"
      title="Content"
      style={{ width: "100%", height: "100%", border: "none" }}
    ></iframe>
  );
}
