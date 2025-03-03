function imageFetcher() {
    return {
      image1: '',
      image2: '',
      fetchImage1() {
        fetch('https://dummyjson.com/image/400x200/282828')
          .then(response => response.blob())
          .then(blob => { this.image1 = URL.createObjectURL(blob); });
      },
      fetchImage2() {
        fetch('https://dummyjson.com/image/500x300/123456')
          .then(response => response.blob())
          .then(blob => { this.image2 = URL.createObjectURL(blob); });
      }
    };
  }
  