export default function Editor() {
  return (
    <iframe
      src="http://192.168.1.120:8888/lab?token=this_is_a_token"
      className="iframe-content"
      title="Content"
      style={{ width: "100%", height: "100%", border: "none" }}
    ></iframe>
  );
}
