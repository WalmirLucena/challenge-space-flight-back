import mongoose, {Document, Schema} from 'mongoose';
import { Model, Article } from '../interfaces';

interface ArticleDocument extends Article, Document {}

interface launches {
    id: string,
    provider: string
}

const ArticleSchema = new Schema<ArticleDocument>({
    featured: Boolean,
    title: String,
    url: String,
    imageUrl: String,
    newsSite: String,
    summary: String,
    publishedAt: String,
    launches: [{
        id: String,
        provider: String
    }],
    events: [{
        id: String,
        provider: String}],
});

class ArticleModel implements Model<Article> {
    constructor( public model = mongoose.model('articles', ArticleSchema)){}

    async create (obj: Article): Promise<Article> {
        const result = await this.model.create({...obj});
        return result;
    }
    
    async read (): Promise<Article[]> {
        const result = await this.model.find();
        return result;
    }

    async readOne (id: string): Promise<Article | null>{
        const result = await this.model.findOne({_id:id});
        return result;
    }

    async update (id:string, obj: Article): Promise<Article | null> {
        const objUpdated = await this.model.findByIdAndUpdate({ _id: id }, obj);
        return objUpdated;
      };
    
    async delete (id: string): Promise<Article | null>  {
        const objRemoved = await this.model.findByIdAndDelete({ _id: id });
        return objRemoved; 
      };
}

export default ArticleModel;