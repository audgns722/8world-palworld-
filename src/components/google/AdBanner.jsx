function AdBanner(props) {
    useEffect(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error(err);
      }
    }, []);
  
    return (
      <ins
        className="adsbygoogle adbanner-customize"
        style={{
          display: 'block',
          overflow: 'hidden',
        }}
        data-ad-client={`ca-pub-4313698984582740`}
        {...props}
      />
    );
  }
  
  export default AdBanner;