//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if(series.length === 0){
      throw new Error('Строка не должна быть пустой');
    }
    this.series = series;
  }

  slices(sliceLength) {
    if(sliceLength <= 0){
      throw new Error('Длина подстроки должна быть положительной');
    }else if(sliceLength > this.series.length){
      throw new Error('Длина подстроки не может превышать длину стркои');
    }
    const result = [];
    for(let i = 0; i <= this.series.length - sliceLength; i++){
      result.push(this.series.slice(i, i + sliceLength));
    }
    return result;
  }
}
